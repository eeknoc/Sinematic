import { Navigate, createBrowserRouter } from "react-router-dom";
import Graphify from "./app/Graphify";
import Probavis from "./app/Probavis";
import About from "./app/About";

export const router = createBrowserRouter([{
    path: "/",
    children: [
        {
            index: true,
            element: <Navigate replace to="graphify"/>
        },
        {
            path: "graphify",
            element: <Graphify/>
        },
        {
            path: "probavis",
            element: <Probavis/>
        },
        {
            path: "about",
            element: <About/>
        }
    ]
}])