import './TaskList.scss';
import Task from './task/Task';

const TaskList = ({list_name})=>{
return(
    <div className='wrapper'>
        <div className="header">{list_name}</div>
        <Task task='Задача' />
    </div>
)}

export default TaskList;