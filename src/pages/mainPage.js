/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { DatePicker } from '../components/DatePicker';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { useHttp } from '../hooks/http.hook';

const getDate = (prev) => {
    const date = new Date();
    const day = prev ? date.getDate() - 1 : date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year}-${month + 1}-${day}`
}

export const MainPage = () => {
    let today = getDate(false);
    if (new Date().getHours() < 12) {
        today = getDate(true)
    }
    const { loading, request, error, clearError } = useHttp();
    const [date, setDate] = useState(today);
    const [pictureData, setData] = useState(null)
    const abortController = new AbortController()


    useEffect(() => {
        if (localStorage.length !== 0) {
            setDate(localStorage.getItem('date'));
        }
    }, [])


    const getDayInfo = async () => {
        console.log(date, 'getDayInfo')
        try {
            const data = await request(`https://api.nasa.gov/planetary/apod?api_key=xIeznLFPQdDuFy7gi8fMReMNEtfpybAScst0phzb&date=${date}`, abortController)
            setData(data)
            localStorage.setItem('date', date)
        } catch (error) {
        }

    }

    useEffect(
        () => {
        console.log(date)
            const fetchData = async () => {
                await getDayInfo()
            }
            fetchData()
        }, [date])

    useEffect(() => {
        localStorage.clear('date');
    }, [error, clearError])

    return (
        <>
            {(error !== null) ? <Error message={error} /> : loading || pictureData === null ? (<Loading />) : (
                <>
                    <DatePicker setDate={setDate} date={pictureData.date} />
                    <Card imageInfo={{ ...pictureData }} />
                </>
            )}
        </>
    )
}
