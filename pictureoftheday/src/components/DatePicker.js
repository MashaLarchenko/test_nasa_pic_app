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
    textField: {
    },
}));


export const DatePicker = ({ setDate, date }) => {
    const [pickedDate, setNewDate] = useState(date);
    const classes = useStyles();
    const onDatePick = (event) => {
        setNewDate(event.target.value);
    }

    useEffect(() => {
        const newDate = pickedDate.split('-');
        const currentDate = date.split('-');

        if (newDate[0] !== currentDate[0] && newDate[1] !== currentDate[1] && newDate[2] !== currentDate[2]) {
            setDate(pickedDate)
        }
    }, [pickedDate])

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="Choose date"
                type="date"
                defaultValue={pickedDate}
                className={classes.textField}
                // InputLabelProps={{
                //     shrink: true,
                // }}
                onChange={onDatePick}
            />
        </form>
    )
}
