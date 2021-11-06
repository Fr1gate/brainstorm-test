import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';
import DoneList from '../DoneList/DoneList';
import AddTask from '../AddTask/AddTask';
import './Tasks.css';


class Tasks extends Component {

    render() {
        return (
            <div className="container">
                <TodoList 
                    tasks={this.props.category.tasksToDo}
                    deleteTask={this.props.deleteTask}
                    checkTask={this.props.checkTask}
                    editTask={this.props.editTask}    
                />
                <DoneList 
                    tasks={this.props.category.tasksDone}
                    uncheckTask={this.props.uncheckTask}
                />
                <AddTask 
                    addTask={this.props.addTask} 
                />
            </div>
        );
    }
}

export default Tasks;