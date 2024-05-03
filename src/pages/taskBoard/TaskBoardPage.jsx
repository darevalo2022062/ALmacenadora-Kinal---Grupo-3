import { AddTask } from '../../components/form/AddTask'
import { ListaTareas } from '../../components/ListaTareas';
import { Navbar } from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export const TaskBoardPage = () => {

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!localStorage.getItem('user')) {
    //         navigate('/auth');
    //     }
    // }, [navigate]);

    return (
        localStorage.getItem('user') ? (
            <div>
                <Navbar />
                <br />
                <AddTask />
                <ListaTareas />
            </div>
        ) : null
    );
}
