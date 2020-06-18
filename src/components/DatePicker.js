/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'left',
        paddingTop: '1%',
        paddingLeft: '2%'
    },
}));


export const DatePicker = ({ setDate, date }) => {
    const [pickedDate, setNewDate] = useState(date);
    const classes = useStyles();
    const defaultDate = localStorage.getItem('date') || date;
    const onDatePick = (event) => {
        setNewDate(event.target.value);
        console.log(pickedDate, 'onDatePick')
    }

    useEffect(() => {
        const newDate = pickedDate.split('-');
        const currentDate = date.split('-');

        if (newDate[0] !== currentDate[0] || newDate[1] !== currentDate[1] || newDate[2] !== currentDate[2]) {
            localStorage.setItem('date', pickedDate)
        console.log(pickedDate, 'useEffect')

            setDate(pickedDate)
        }
    }, [pickedDate])

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="Choose date"
                type="date"
                defaultValue={defaultDate}
                className={classes.textField}
                onChange={onDatePick}
            />
        </form>
    )
}
