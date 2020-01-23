import React from 'react';
import { Table } from 'semantic-ui-react';

const normalExerciseRow = (exercise, idx) => (
  <Table.Row key={idx}>
    <Table.Cell key={idx}>{exercise}</Table.Cell>
  </Table.Row>
);

const highlightedExerciseRow = (exercise, idx) => (
  <Table.Row key={idx} active>
    <Table.Cell key={idx}>{exercise}</Table.Cell>
  </Table.Row>
);

const ExerciseList = (props) => {
  return (
    <Table padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign={'center'} padded>Exercises</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.exercises.map((exercise, idx) => {
          if (idx === props.highlightedExercise) {
            return highlightedExerciseRow(exercise, idx)
          } else {
            return normalExerciseRow(exercise, idx)
          }
        })}
      </Table.Body>
    </Table>
  )
};

ExerciseList.defaultProps = {
  exercises: ['Do nothing'],
  highlightedExercise: 0
};

export default ExerciseList;
