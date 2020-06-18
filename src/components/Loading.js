import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './index.scss';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height:' 80vh'
    },
  });

export const Loading = () => {
    const classes = useStyles();
    return (
        <Container width='md' className='loader_continer' classes={{root: classes.root}}>
            <Typography align='center' variant='h3' component='h3' className='loading'>Loading</Typography>
            <Loader type="ThreeDots" color="#160572cf" height={80} width={80} className='spinner'/>
        </Container>

    )
}