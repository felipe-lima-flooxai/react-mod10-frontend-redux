import React from "react";
import iconButton from "../template/iconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { markAsDone, markAsPending, remove } from "./todoActions";

const TodoList =  props =>{

    const renderRows = ()=>{

        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done? "markedAsDone" : ""}>{todo.description}</td>
                <td>
                    <iconButton style="success" icon="check" onClick={()=> props.markAsDone(todo) } hide={todo.done}></iconButton>
                    <iconButton style="warning" icon="undo" onClick={()=> props.markAsPending(todo) } hide={!todo.done}></iconButton>
                    <iconButton style="danger" icon="trash-o" onClick={()=> props.remove(todo)} hide={!todo.done}></iconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descriçao</th>
                    <th className="tableActions">Acões</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}


const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPending, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)