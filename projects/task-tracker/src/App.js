import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Prepare for interview',
      day: 'Tuesday',
      reminder: true
    },
    {
      id: 2,
      text: 'Food shopping',
      day: 'monday',
      reminder: false
    },
    {
      id: 3,
      text: 'sleeping',
      day: 'Sunday',
      reminder: false
    }
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    // console.log('Deleted', id)
    setTasks(tasks.filter(task => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    // console.log('toggle' , id)
    // setTasks(prevState => !prevState)
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd = {() => setIsOpen(!isOpen)} show = {isOpen} />
      {isOpen && <AddTask onAddTask={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No task found!'}
    </div>
  );
}

export default App;






//class based component
// import React from 'react'
// class App extends React.Component {
//   render() {
//     return <h1>
//       Hello from a class based component
//     </h1>
//   }
// }

// export default App