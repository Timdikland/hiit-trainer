import React, { useState, useEffect, useRef } from 'react';
import { Grid, Button, Segment, Header } from 'semantic-ui-react';

import CurrentExercises from '../../containers/CurrentExercises';

import CircularProgressBar from '../../components/CircularProgressBar';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  })
}

function Workout(props) {
    const workout = props.workout;
    const workoutLength = workout.length;
    const delay = 100; // Make sure that it fits in seconds ie. 1000 mod delay === 0

    const [isCounting, setIsCounting] = useState(false);
    const [isRestPhase, setIsRestPhase] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [currentIntervalLength, setCurrentIntervalLength] = useState(workout[currentExercise].activityTime*1000);

    useInterval(() => {
      if ((timeElapsed + delay) === currentIntervalLength) {
        setIsCounting(false);
        if ((currentExercise + 1) < workoutLength) {
          if (!isRestPhase) {
            setIsRestPhase(true);
            setCurrentIntervalLength(workout[currentExercise].restTime*1000);
            setTimeElapsed(0);
            setIsCounting(true);
          } else {
            setIsRestPhase(false);
            setCurrentExercise(currentExercise + 1)
            setCurrentIntervalLength(workout[currentExercise].activityTime*1000);
            setTimeElapsed(0);
            setIsCounting(true);
          }
        } else {
          if (!isRestPhase) {
            setIsRestPhase(true);
            setCurrentIntervalLength(workout[currentExercise].restTime*1000);
            setTimeElapsed(0);
            setIsCounting(true);
          } else {
            setIsRestPhase(false);
            setCurrentIntervalLength(1)
            setTimeElapsed(0);
          }
        }
      } else {
        setTimeElapsed(timeElapsed + delay);
      }
    }, isCounting ? delay : null)

    return (
      <Grid columns={2} padded={true}>
        <Grid.Column textAlign="center">
          <CurrentExercises
            highlightedExercise={currentExercise}
            workout={workout}
          />
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Segment>
          {
            isRestPhase
              ? <Header as='h1'>Ga klaar staan voor de volgende oefening!</Header>
              : <Header as='h1'>Voer de oefening maximaal uit!</Header>
          }
          <CircularProgressBar
            timeElapsed={timeElapsed/1000}
            currentIntervalLength={currentIntervalLength/1000}
            isRestPhase={isRestPhase}
          />
          </Segment>
          <Segment>
          <Button onClick={() => setIsCounting(!isCounting)}>
            {!isCounting ? <p>Start</p> : <p>Pauze</p>}
          </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    )
}

export default Workout
