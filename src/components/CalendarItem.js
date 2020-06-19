/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Context } from '../context/Context'
import { Link } from 'react-router-dom'


export const CalendarItem = ({ category, name, data, index, setCount, setState, state, img }) => {
  console.log(name, 'name')
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
  const imgUrl = img || require(`../resourses/images/${imgNum}.jpg`);

  useEffect(() => {
    setState(context.dateState);
  }, [category])

  const clickHandler = () => {
    state[category] = name;
    context.category = name;
    setCount(context.count + 1);
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
    setState({
      ...state
    })
  }

  useEffect(() => {
    context.dateState = state;
    console.log(context.dateState, 'useEffect')
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