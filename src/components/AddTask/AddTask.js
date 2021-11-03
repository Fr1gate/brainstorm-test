import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
    render() {
        return (
            <div className='add-task'>
                <input className="add-task__input" type="text" placeholder="Введите текст задачи" />
                <input className="add-task__submit" type="submit" value="ДОБАВИТЬ"/>
            </div>
        );
    }
}

export default AddTask;