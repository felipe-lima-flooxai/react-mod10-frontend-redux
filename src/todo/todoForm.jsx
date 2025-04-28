import React, {Component} from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton.jsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDescription, search } from "./todoActions.js";


class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        if(e.key === "Enter"){
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd
        } else if(e.key === "Escape") {
            props.handleClear()
        }
    }

    componentWillMount(){
        this.props.search()
    }

    render(){
        <div role="form" className="todoForm">
            <div className="row">
                <Grid cols="12 9 10">
                    <input type="text" className="form-control" id="description" placeholder="Adicione uma tarefa"
                    value={props.description} onChange={props.changeDescription} onKeyUp={keyHandler}  />
                </Grid>
                    
    
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon = "plus" onClick={props.handleAdd}>
                        <i className="fa fa-plus"></i>
                    </IconButton>
                    <IconButton style="info" icon='search' onClick={props.handleSearch}></IconButton>
                    <IconButton style="default" icon='close' onClick={props.handleClear}></IconButton>
                </Grid>
            </div>
        </div>
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps(TodoForm))