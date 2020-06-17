import React from 'react';
import { Card } from '../components/Card';
import { DatePicker } from '../components/DatePicker';
import { Loading } from '../components/Loading';
import { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';

const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year}-${month + 1}-${day}`
}

export const MainPage = () => {
    const today = getDate();
    const { loading, error, request, clearError } = useHttp();
    const [date, setDate] = useState(today);
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
                    <DatePicker setDate={setDate} date={pictureData.date} />
                    <Card imageInfo={{ ...pictureData }} />
                </>
            )}
        </>
    )
}
