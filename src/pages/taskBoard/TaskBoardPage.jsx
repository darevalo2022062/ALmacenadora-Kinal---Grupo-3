import { useNavigate } from 'react-router-dom'
import { AddTask } from '../../components/form/AddTask'
import { Navbar } from '../../components/navbar/Navbar'
import { useEffect } from 'react';
export const TaskBoardPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/auth');
        }
    }, [navigate]);


    return (
        localStorage.getItem('user') ? (
            <div>
                <Navbar />
                <br />
                <AddTask />
            </div>
        ) : null
    )
}
