// Function runs the robot, but returns the number instead of printing
function runRobotTest(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  const numMeasurements = 100;
  let numTurns1 = 0;
  let numTurns2 = 0;
  
  for (let i = 0; i < numMeasurements; i++) {
    let randState = VillageState.random();
    numTurns1 += runRobotTest(randState, robot1, memory1);
    numTurns2 += runRobotTest(randState, robot2, memory2);
  }
  
  console.log(`Robot 1 completed the tasks with an average of ${numTurns1/numMeasurements} steps.`);
  console.log(`Robot 2 complete the tasks with an average of ${numTurns2/numMeasurements} steps.`);  
}

compareRobots(routeRobot, [], goalOrientedRobot, []);