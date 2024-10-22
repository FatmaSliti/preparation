import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div>
            {tasks.map(item => {
                return (
                    <div key={item.id}>
                        <Task task = {item} onDelete={onDelete} onToggle={onToggle} />
                    </div>
                )
            })}
            
        </div>
    )
}

export default Tasks
