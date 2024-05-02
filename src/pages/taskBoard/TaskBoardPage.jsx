import { AddTask } from '../../components/form/AddTask'
import { ListaTareas } from '../../components/ListaTareas'
import './taskBoard.css'

export const TaskBoardPage = () => {
    return (
        <div className='main-container'>
            <AddTask/>
            <ListaTareas className='Lista-Tareas'/>
        </div>
    )
}
