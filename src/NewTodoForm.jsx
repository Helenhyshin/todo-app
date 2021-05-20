import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./NewTodoForm.css"

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state={task:""}
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createToDoItem({...this.state, id: uuidv4(), completed:false});
        this.setState({
            task: "", 
        });
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }

    render(){
        return(
            <div>
                <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="task">New Todo</label>
                    <input 
                        type="text"
                        placeholder="New Todo"
                        id="task"
                        onChange={this.handleChange}
                        name="task"
                        value={this.state.task}
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;