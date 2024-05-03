import { useNavigate } from 'react-router-dom'
import { AddTask } from '../../components/form/AddTask'
import { Navbar } from '../../components/navbar/Navbar'
import { useEffect } from 'react';
import { ListaTareas } from '../../components/ListaTareas';

export const TaskBoardPage = () => {

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!localStorage.getItem('user')) {
    //         navigate('/auth');
    //     }
    // }, [navigate]);

    return (

        <div>

        <AddTask />
        </div>
        
        // localStorage.getItem('user') ? (
        //     <div>
        //         <Navbar />
        //         <br />
        //         <AddTask />
        //     </div>
        // ) : null
    );
}
