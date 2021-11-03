import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';
import DoneList from '../DoneList/DoneList';
import AddTask from '../AddTask/AddTask';
import './Tasks.css';


class Tasks extends Component {
    render() {
        return (
            <div class="container">
                <TodoList />
                <DoneList />
                <AddTask />
            </div>
        );
    }
}

export default Tasks;