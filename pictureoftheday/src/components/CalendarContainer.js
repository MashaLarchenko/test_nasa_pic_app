import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { CalendarItem } from './CalendarItem';
import { useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { getYearArray } from '../resourses/yearArray';
import { getMonthArray } from '../resourses/monthArray';
import { daysInMonth } from '../resourses/daysArray';
import { Context } from '../context/Context'

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



export const CalendarContainer = () => {
  const context = useContext(Context);
  const category = ['years', 'month', 'days']
  const classes = useStyles();
  // let periodArray = [];
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [periodArray, setPeriodArray] = useState(getYearArray());

  const name = category[count - 1];
  console.log(name, 'name in cont')
  console.log(periodArray, 'periodArray')

  useEffect(() => {
    if (name === 'years') {
      setPeriodArray(getYearArray());
    } else if (name === 'month') {
      setPeriodArray(getMonthArray());
    } else setPeriodArray(daysInMonth());

  }, [count])

  // switch (name) {
  //   case 'years':
  //     setPeriod(getYearArray());
  //     break;
  //   case 'month':
  //     setPeriod(getMonthArray());
  //     break;
  //   case 'days':
  //     setPeriod(daysInMonth());
  //     break;

  // }
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
        {periodArray.map((year, index) => {
          if (index + 1 <= page * 9 && index + 1 > page * 9 - 9) {
            return <CalendarItem category={name} name={year} key={index} index={index} setCount={setCount} />
          }
        }
        )}
      </ul>
      <div className={classes.root}>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button onClick={onPrevPage}>Back</Button>
          <Button>{page}</Button>
          <Button onClick={onNextPage}>Next</Button>
        </ButtonGroup></div>

    </div>

  )
}