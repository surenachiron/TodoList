import React, {Fragment, useContext} from "react";
import ContentHeader from "../component/Header/ContentHeader";
import {ToastContainer} from "react-toastify";
import AddAndShowDoneTask from "../component/Features/AddAndShowDoneTask";
import Context from "../contexapi/Context";

const TodoList = () => {

    const context = useContext(Context)

    return(
        <Fragment>

            <ContentHeader />
            <button onClick={context.fordarkthemetruefalse} style={{position:"fixed",bottom: "0",right: "0",zIndex: "10000"}} className={`${context.classess.map(p => p.changebgbutton)} m-2 border-0 px-1 rounded-circle shadow-lg`}>
                {context.classess.map(p => p.darkorlight)}
            </button>
            <ToastContainer />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <AddAndShowDoneTask/>
            </div>
            {context.showhideaddtodolist}

        </Fragment>
    )
}

export default TodoList;