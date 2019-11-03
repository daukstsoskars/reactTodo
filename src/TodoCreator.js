import React, {Component} from 'react'

export class TodoCreator extends Component {
    constructor(props){
        super(props);
        this.state = {newItemText: ""}
    }

    updateNewTextvalue = (event) => {
        this.setState({newItemText:event.target.value});
    }

    createNewTodo = _ => {
        this.props.callback(this.state.newItemText);
        this.setState({newItemText: ""})
    }

    render = _ =>
        <div className='mt-1'>
            <input className='form-control' value={this.state.newItemText} onChange={this.updateNewTextvalue}/>
            <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>Add</button>
        </div>
}