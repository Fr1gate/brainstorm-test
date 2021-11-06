import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
    constructor(props) {
        super(props);

        this.inputField = React.createRef();

        /////  BINDS  /////
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.addTask({name: this.inputField.current.value});
        this.inputField.current.value = '';
    }

    render() {
        return (
            <div className='add-task'>
                <form onSubmit={this.handleSubmit}>
                    <input ref={this.inputField} className="add-task__input" type="text" placeholder="Введите текст задачи" />
                    <input className="add-task__submit" type="submit" value="ДОБАВИТЬ"/>
                </form>
            </div>
        );
    }
}

export default AddTask;