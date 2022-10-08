import React, {useState} from 'react'
import './App.css'
import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'


const App = () => {
  const[courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'}
  ])


  const addNewGoalHandler = newGoal => {
    //Do this if state update doesn't depend on previous state
    // setCourseGoals(courseGoals.concat(newGoal))

    //This is if it does depend on previous state
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal))
  }

  return (
  <div className="course-goals">
    <h2>Course Goals</h2>
    <NewGoal onAddGoal = {addNewGoalHandler}/>
    <GoalList goals = {courseGoals}/>
  </div>
  )
};

export default App;
