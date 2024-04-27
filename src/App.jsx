import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
<<<<<<< HEAD
import routes from "../routes";

export const App=()=> {
	const element = useRoutes(routes);
	return (
		<>
			{element}
			<Toaster position="top-center" reverseOrder={false}/>
		</>
	);
}
=======
import "bulma/css/bulma.min.css";
import routes from "./routes.jsx";

export const  App = () => {
  let element = useRoutes(routes);
  return (
    <>
      {element}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
>>>>>>> e9271616cf3bdd24dc65b5f28da43f2257f77991
