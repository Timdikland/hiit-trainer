import React from 'react';
import  './index.css';

const CircularProgressBar = (props) => {
  const timeElapsed = props.timeElapsed;
  const currentIntervalLength = props.currentIntervalLength;
  const isRestPhase = props.isRestPhase;
  const sqSize = props.sqSize;

  const percentage = 100 - Math.round((timeElapsed/currentIntervalLength)*100);
  const radius = (props.sqSize - props.strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - dashArray * percentage / 100;

  const restOrActivity = (isRestPhase) => {
    if (isRestPhase){
      return '-rest'
    } else {
      return '-activity'
    }
  }

  return (
    <svg
      width={props.sqSize}
      height={props.sqSize}
      viewBox={viewBox}
    >
      <circle
        className="circle-background"
        cx={props.sqSize / 2}
        cy={props.sqSize / 2}
        r={radius}
        strokeWidth={`${props.strokeWidth}px`}
      />
      <circle
        className={`circle-progress${restOrActivity(isRestPhase)}`}
        cx={props.sqSize / 2}
        cy={props.sqSize / 2}
        r={radius}
        strokeWidth={`${props.strokeWidth}px`}
        transform={`rotate(-90 ${props.sqSize / 2} ${props.sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset
        }}
      />
      <text
        className={`circle-text${restOrActivity(isRestPhase)}`}
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
      >
        {`${Math.round(currentIntervalLength-timeElapsed)}s`}
      </text>
    </svg>
  )
}

CircularProgressBar.defaultProps = {
  sqSize: 400,
  strokeWidth: 30
};

export default CircularProgressBar;
