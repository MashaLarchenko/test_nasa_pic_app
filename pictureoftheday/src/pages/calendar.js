import React, { useContext } from 'react';
import { Card } from '../components/Card';
import { CalendarContainer } from '../components/CalendarContainer';
import { daysInMonth } from '../resourses/daysArray';
import { Context } from '../context/Context'


export const Calendar = () => {
    const context = useContext(Context);
    const category = ['years', 'month', 'days']
    return (
        <CalendarContainer/>
    )
}