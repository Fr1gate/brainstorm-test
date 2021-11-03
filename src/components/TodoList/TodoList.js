import React, { Component } from 'react';
import Task from '../Task/Task';

class TodoList extends Component {
    render() {
        return (
            <div >
                <h2 className="header">Сделать</h2>
                <ul>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </ul>
            </div>
        );
    }
}

export default TodoList;