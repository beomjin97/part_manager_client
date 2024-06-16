import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "./Login";
import NotFound from "./Notfound";
import Part from "./Part";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'part/:id',
        element: <Part />
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router