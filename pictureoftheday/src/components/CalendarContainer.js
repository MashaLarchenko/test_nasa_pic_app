import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { CalendarItem } from './CalendarItem';
import { useEffect } from 'react';


const getYearArray = () => {
  const start = 1995;
  const stop = new Date().getFullYear();
  const yearsAray = [];
  for (let i = start; i <= stop; i++) {
    yearsAray.push(i)
  }

  return yearsAray;
}
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



export const CalendarContainer = ({ name }) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  let years = [];
  if (name = 'years') {
    years = getYearArray();
  }

  const onNextPage = () => {
    if (page * 10 > years.length) {
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
        {years.map((year, index) => {
          if (index + 1 <= page * 10 && index + 1 > page * 10 - 10) {
            return <CalendarItem name={year} key={index} />
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