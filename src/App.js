import React from 'react';
import Workout from './pages/Workout';

const squad = {
  name: "Squad",
  activityTime: 50,
  restTime: 10
};

const lunge = {
  name: "Lunge",
  activityTime: 50,
  restTime: 10
};

const crunch = {
  name: "Crunch (korte buikspieren)",
  activityTime: 50,
  restTime: 10
};

const climber = {
  name: "Mountain climbers",
  activityTime: 50,
  restTime: 10
};

const push = {
  name: "Opdrukken (op knieën als het niet anders gaat)",
  activityTime: 50,
  restTime: 10
};

const burpee = {
  name: "Burpee",
  activityTime: 50,
  restTime: 10
};

const schaar = {
  name: "Schaar (kruiselings met rechterarm de buitenkant van linkervoet aantikken)",
  activityTime: 50,
  restTime: 10
};

const ext = {
  name: "Hip extention (een been strekken terwijl je je heup omhoog duwt)",
  activityTime: 50,
  restTime: 10
};

const workout = [crunch, climber, push, burpee, schaar, ext];

function App() {
  return (
    <div>
      <Workout
        workout={workout}
      />
    </div>
  );
}

export default App;
