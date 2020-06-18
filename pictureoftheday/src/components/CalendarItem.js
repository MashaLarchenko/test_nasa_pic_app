import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../context/Context'
import { Link } from 'react-router-dom'


export const CalendarItem = ({ category, name, data, index, setCount }) => {
  const context = useContext(Context);
  let imgNum = index + 1;
  if (index > 26) {
    imgNum = 36 - index;
  }
  else if (index > 17) {
    imgNum = 27 - index;
  } else if (index > 8) {
    imgNum = 18 - index;
  }
  const imgUrl = require(`../resourses/images/${imgNum}.jpg`);
  const [state, setState] = useState({
    years: '1995',
    month: '07',
    days: '17'
  })

  const [dateCategory, setCategory] = useState('years')

  const clickHandler = () => {
    state[category] = name;
    context.category = name;
    setCount(context.count + 1);
    setCategory(category);
    context.count++;
    setState({
      ...state
    })
  }

  const dayClickHandler = () => {
    state[category] = name;
    context.dateState.days = name;
    context.count = 1;
    setCount(context.count)
    setCategory(category);
    setState({
      ...state
    })
  }

  useEffect(() => {
    context.dateState = state;
  }, [state])
  return (
    <>
      {category === 'days' ? (
        <Link to="/days" className='calendar_li_item' style={{ backgroundImage: `url(${imgUrl})` }} onClick={dayClickHandler}>
          <span>
            {name}
          </span>
        </Link>

      ) : (<li className='calendar_item' style={{ backgroundImage: `url(${imgUrl})` }} onClick={clickHandler}>
        <span>
          {name}
        </span>
      </li>)}
    </>



  )
}