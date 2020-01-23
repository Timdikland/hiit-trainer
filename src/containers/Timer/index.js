import React, { useState, useEffect } from 'react'
import CircularProgressBar from '../../components/CircularProgressBar'

const percentageLimiter = (percentage) => {
  if (percentage > 100) {
    console.log('overflow')
    return 100
  } else if (percentage < 0) {
    console.log('underflow')
    return 0
  } else {
    return percentage
  }
}

const calculatePercentage = (part, total) => {
  return Math.floor((part/total)*100)
}

const Timer = (props) => {
  const percentage = Math.floor((props.timeLeft/props.totalTime)*100)
  return (
    <div>
      <CircularProgressBar percentage={percentageLimiter(percentage)} />
    </div>
  )
};

export default Timer
