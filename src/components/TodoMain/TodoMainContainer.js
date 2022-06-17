import {connect} from "react-redux";
import TodoMain from "./TodoMain";
import {addTodo, dellTodo} from "../../redux/redux";

let mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}


export let TodoMainContainer = connect(mapStateToProps,{addTodo,dellTodo})(TodoMain)