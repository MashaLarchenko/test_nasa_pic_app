/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { CalendarItem } from './CalendarItem';
import { useEffect } from 'react';
import { getYearArray } from '../resourses/yearArray';
import { getMonthArray } from '../resourses/monthArray';
import { DaysInMonth } from '../resourses/daysArray';
import { Context } from '../context/Context'
import { useHttp } from '../hooks/http.hook';
import { monthFormatter } from '../utils/monthFormatter';
import { dayFormatter } from '../utils/dayFormatter';
import { Loading } from '../components/Loading';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const daysImg = [];


export const CalendarContainer = () => {
  const [loading, setLoading] = useState(false);
  const context = useContext(Context);
  const category = ['years', 'month', 'days']
  const classes = useStyles();
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [dayData, setDayData] = useState(null)
  const [periodArray, setPeriodArray] = useState(getYearArray());
  const [dayImages, setDayImages] = useState(null)
  const [state, setState] = useState({
    years: '1995',
    month: '07',
    days: '17'
  })
  const name = category[count - 1];

  useEffect(() => {
    if (name === 'years') {
      setPeriodArray(getYearArray());
    } else if (name === 'month') {
      setPeriodArray(getMonthArray());
    } else {
      const fetchData = async () => {
        setLoading(true)
        const dataImg = await DaysInMonth(context.dateState.years, context.dateState.month);
        console.log(dataImg, 'dataImg')
        setDayData(dataImg)
        setLoading(false)
      }
      fetchData()
    }
  }, [count])

  useEffect(() => {
    if (name === 'days') {
      console.log(dayData, 'dayData')
      setPeriodArray(dayData.days)
      setDayImages(dayData.img)
    }
  }, [dayData])


  const onNextPage = () => {
    if (page * 9 > periodArray.length) {
      setPage(page);
    } else setPage(page + 1)
  }

  const onPrevPage = () => {
    if (page === 1) {
      setPage(page);
    } else setPage(page - 1)
  }

  return (
    <div className="calendar_wrapper">
      <ul className='calendar_container'>
        {console.log(periodArray)}
        {loading ? <Loading /> : periodArray.map((year, index) => {
          if (index + 1 <= page * 9 && index + 1 > page * 9 - 9) {
            console.log(dayImages, 'dayImages')
            if (dayImages !== null) {
              return <CalendarItem category={name} name={year[index]} key={index} index={index} setCount={setCount} setState={setState} state={state}
                img={dayImages[index]} />
            }
            else {
              return <CalendarItem category={name} name={year} key={index} index={index} setCount={setCount} setState={setState} state={state}
                img={null} />
            }
          }
        }
        )}
      </ul>
      <div className={classes.root}>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button onClick={onPrevPage} id='nav_btn'>Back</Button>
          <Button id='nav_btn'>{page}</Button>
          <Button onClick={onNextPage} id='nav_btn'>Next</Button>
        </ButtonGroup></div>

    </div>

  )
}