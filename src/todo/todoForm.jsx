import React, {Component} from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton.jsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { add, changeDescription, search, clear } from "./todoActions.js";


class TodoForm extends Component {
    constructor(props){
        super(this.props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        const {add, search, description, clear} = this.props
        if(e.key === "Enter"){
            e.shiftKey ? search(description) : add(description)
        } else if(e.key === "Escape") {
            clear()
        }
    }

    componentWillMount(){
        this.props.search()
    }

    render(){
        const {add, search, description} = this.props
        return (<div role="form" className="todoForm">
            <div className="row">
                <Grid cols="12 9 10">
                    <input type="text" className="form-control" id="description" placeholder="Adicione uma tarefa"
                    value={this.props.description} onChange={this.props.changeDescription} onKeyUp={this.keyHandler}  />
                </Grid>
                    
    
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon = "plus" onClick={() => add(description)}>
                        <i className="fa fa-plus"></i>
                    </IconButton>
                    <IconButton style="info" icon='search' onClick={()=> search(description)}></IconButton>
                    <IconButton style="default" icon='close' onClick={this.props.clear}></IconButton>
                </Grid>
            </div>
        </div>)
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({add, changeDescription, search, clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps(TodoForm))