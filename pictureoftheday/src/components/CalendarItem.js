import React, { useState, useContext } from 'react';
import { Context } from '../context/Context'


export const CalendarItem = ({ category, name, data, index, setCount }) => {
  const context = useContext(Context);
  let imgNum = index + 1;
  if (index > 17) {
    imgNum = 27 - index;
  } else if (index > 8) {
    console.log(imgNum >= 8)
    console.log('gresh')
    imgNum = 18 - index;
    console.log(imgNum, 'oktkyuk')
  }
  const imgUrl = require(`../resourses/images/${imgNum}.jpg`);
  const [state, setState] = useState({
    years: '1995',
    month: '07',
    day: '17'
  })
  console.log(state)

  const clickHandler = () => {
    state[category] = name
    if (context.count === 3) {
      context.count = 1;
      setCount(context.count)
    }
    setCount(context.count + 1);
    setState({
      ...state
    })
  }
  return (
    <li className='calendar_item' style={{ backgroundImage: `url(${imgUrl})` }} onClick={clickHandler}>
      <span>
        {name}
      </span>
    </li>
  )
}