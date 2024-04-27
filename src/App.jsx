import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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