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

const AppLayout = () => {
    return <div>
        {/* <Counter /> */}
        {/* <Toogle /> */}
        {/* <Input /> */}
        {/* <Todo /> */}
        {/* <StatePratice /> */}
        {/* <OwnTodo /> */}
        <UseAPI />
    </div>
}

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"))
ReactRoot.render(<AppLayout />)
export default AppLayout