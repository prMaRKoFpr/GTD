import './MainContent.scss';
import TaskList from './taskList/TaskList';

const MainContent = ()=>{
    return(
        <div className="wrapper">
            <TaskList list_name='Задачи'/>
        </div>
    )
}

export default MainContent;