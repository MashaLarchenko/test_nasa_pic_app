import React from 'react'
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './index.scss';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: ' 80vh'
    },
});

export const Error = ({ message }) => {
    const classes = useStyles();

    return (
        <Container width='md' className='loader_continer' classes={{ root: classes.root }}>
            <Typography align='center' variant='h3' component='h3' className='error'>{message}</Typography>
        </Container>
    )
}