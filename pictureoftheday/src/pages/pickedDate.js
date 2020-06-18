import React, { useContext } from 'react';
import { Card } from '../components/Card';
import { DatePicker } from '../components/DatePicker';
import { Loading } from '../components/Loading';
import { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { Context } from '../context/Context'

const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year}-${month + 1}-${day}`
}

const monthFormatter = (month) => {
    const monthAray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const number = monthAray.findIndex(item => {
        return item === month
    });
    let monthNumber = 0;
    if (number + 1 < 10) {
        monthNumber = `0${number + 1}`;
    } else {
        monthNumber = number + 1
    }

    console.log(month, number, monthNumber, 'converter')

    return monthNumber;
}


const dayFormatter = (day) => {
    if (day < 10) {
        day = `0${day}`
    }

    return day;
}
export const DayPage = () => {
    // const today = getDate();
    const { loading, error, request, clearError } = useHttp();
    // const [date, setDate] = useState('2020-06-17');
    const context = useContext(Context);
    console.log(context.dateState)
    const month = monthFormatter(context.dateState.month);
    const day = dayFormatter(context.dateState.days)
    const date = `${context.dateState.years}-${month}-${day}`;
    console.log(date, 'date to one pg')
    const [pictureData, setData] = useState(null)
    const abortController = new AbortController()
    const getDayInfo = async () => {
        try {
            const data = await request(`https://api.nasa.gov/planetary/apod?api_key=xIeznLFPQdDuFy7gi8fMReMNEtfpybAScst0phzb&date=${date}`, abortController)
            setData(data)
        } catch (error) {
            console.log(error.stack)
        }

    }
    useEffect(
        () => {
            const fetchData = async () => {
                await getDayInfo()
            }
            fetchData()
        }, [date])

    return (
        <>
            {loading || pictureData === null ? (<Loading />) : (
                <>
                    {/* <DatePicker setDate={setDate} date={pictureData.date} /> */}
                    <Card imageInfo={{ ...pictureData }} />
                </>
            )}
        </>
    )
}
