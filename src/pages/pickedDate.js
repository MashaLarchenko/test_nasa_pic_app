/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useCallback } from 'react';
import { Card } from '../components/Card';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { Context } from '../context/Context';

const monthFormatter = (month) => {
    const monthAray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (month.length < 3) return month

    const number = monthAray.findIndex(item => {
        return item === month
    });
    let monthNumber = number + 1;
    if (number < 10) {
        monthNumber = `0${number + 1}`;
    } else {
        monthNumber = number + 1
    }
    return monthNumber;
}


const dayFormatter = (day) => {
    if (day < 10) {
        day = `0${day}`
    }

    return day;
}
export const DayPage = () => {
    const { loading, error, request, clearError } = useHttp();
    const context = useContext(Context);
    const month = monthFormatter(context.dateState.month);
    const day = dayFormatter(context.dateState.days)
    const date = `${context.dateState.years}-${month}-${day}`;
    const [pictureData, setData] = useState(null)
    const abortController = new AbortController()
    const getDayInfo = useCallback(async () => {
        try {
            const data = await request(`https://api.nasa.gov/planetary/apod?api_key=xIeznLFPQdDuFy7gi8fMReMNEtfpybAScst0phzb&date=${date}`, abortController)
            setData(data)
            localStorage.setItem('date', date)
        } catch (error) {
        }

    }, [])

    useEffect(
        () => {
            const fetchData = async () => {
                await getDayInfo()
            }
            fetchData()
        }, [date])

    useEffect(() => {
        console.log(error)
    }, [error, clearError])

    return (
        <>
            {(error !== null) ? <Error message={error} /> : loading || pictureData === null ? (<Loading />) : (
                <Card imageInfo={{ ...pictureData }} page='day' />
            )}
        </>
    )
}
