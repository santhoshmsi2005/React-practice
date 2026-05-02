import React from "react"
import ReactDOM from "react-dom/client"
import Counter from "./pages/Counter"
import "./index.css"
import Toogle from "./pages/Toogle"
import Input from "./pages/Input"
import Todo from "./pages/Todo"
import StatePratice from "./pages/StatePratice"
import OwnTodo from "./pages/OwnTodo"
import UseAPI from "./pages/UseAPI"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"

const AppLayout = () => {
    return <div>
        <Navbar />
        <Outlet />
        <Footer />

    </div>
}

const Home = () => {
    return (
        <>
            {/* <Counter />
            <Toogle />
            <Input />
            <Todo />
            <StatePratice />
            <OwnTodo />
            <UseAPI /> */}
        </>
    )
}

const Route = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path:"/todo",
                element: <Todo />
            },
            {
                path: "/useapi",
                element: <UseAPI />
            },
            {
                path: "/input",
                element: <Input />
            }
        ]
    },
],
{
    basename: "/React-practice",
}
)

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"))
ReactRoot.render(<RouterProvider router={Route} />)
export default AppLayout