import React, { Component } from 'react';
import Task from '../Task/Task';

class TodoList extends Component {


    showTasks() {
        const listTasks = this.props.tasks.map((task, key) => {
            return (
                <Task 
                    task={task} 
                    key={key} 
                    arrKey={key}
                    done={false} 
                    deleteTask={this.props.deleteTask}
                    checkTask={this.props.checkTask}
                    editTask={this.props.editTask} 
                />
            )
        })

        return listTasks
    }

    render() {
        return (
            <div >
                <h2 className="header">Сделать</h2>
                <ul>
                    {this.showTasks()}
                </ul>
            </div>
        );
    }
}

export default TodoList;