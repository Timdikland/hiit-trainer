import React from 'react';

import ExerciseList from '../../components/ExerciseList'

const CurrentExercises = (props) => {
  const exercises = props.workout.map((ex) => (ex.name))
  return (
    <ExerciseList
      exercises={exercises}
      highlightedExercise={props.highlightedExercise}
    />
  )
}

export default CurrentExercises;
