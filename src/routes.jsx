import { AuthPage } from "./pages/auth";
import { DashboardPage } from "./pages/dashboard";
import { TaskBoardPage } from "./pages/taskBoard/TaskBoardPage";

const routes = [
    {path: "/auth", element: <AuthPage />},
    {path: "/taskBoard", element: <TaskBoardPage />},
]

export default routes;
