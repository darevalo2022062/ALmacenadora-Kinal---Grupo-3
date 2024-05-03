<<<<<<< HEAD
import { AddTask } from '../../components/form/AddTask'
import { ListaTareas } from '../../components/ListaTareas'
//import './taskBoard.css'

=======
import { useNavigate } from 'react-router-dom'
import { AddTask } from '../../components/form/AddTask'
import { Navbar } from '../../components/navbar/Navbar'
import { useEffect } from 'react';
>>>>>>> 9f5dbc7f5c627d7069134d32a11d56fba3965496
export const TaskBoardPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/auth');
        }
    }, [navigate]);


    return (
<<<<<<< HEAD
        <div className='main-container'>
            <AddTask/>
            <ListaTareas className='Lista-Tareas'/>
        </div>
=======
        localStorage.getItem('user') ? (
            <div>
                <Navbar />
                <br />
                <AddTask />
            </div>
        ) : null
>>>>>>> 9f5dbc7f5c627d7069134d32a11d56fba3965496
    )
}
