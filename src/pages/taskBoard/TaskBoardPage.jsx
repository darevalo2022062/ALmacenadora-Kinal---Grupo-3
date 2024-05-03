import { AddTask } from '../../components/form/AddTask'
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
