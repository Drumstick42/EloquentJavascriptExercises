// Uses code from Measuring_a_robot.js
// More efficient version of the goal orient robot, 
// that takes the route to the closest parcel. 
// If two parcels are equidistant, go to the pickup,
// as we want the robot
// to maximize the probability of "accidentally" dropping off a parcel
// on the route to somewhere
function efficientGoalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let routes = [];
    
    for (let parcel of parcels) {
        if (parcel.place != place) {
        routes.push({route : findRoute(roadGraph, place, parcel.place),
                          pickup : true});
      } else {
          routes.push({route : findRoute(roadGraph, place, parcel.address),
                          pickup : false});
      }
    }
    
    let findMinRoute = function(minRoute, route)
    {
      if (route.length < minRoute.length || 
         (route.length === minRoute.length && route.pickup))
        return route;
      else
        return minRoute;
    }
        
    route = routes.reduce(findMinRoute).route; 
  }
  return {direction: route[0], memory: route.slice(1)};
}

compareRobots(goalOrientedRobot, [], efficientGoalOrientedRobot, [