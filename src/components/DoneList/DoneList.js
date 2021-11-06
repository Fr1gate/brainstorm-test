import React, { Component } from 'react';
import Task from '../Task/Task.js';

class DoneList extends Component {

    showTasks() {
        const listTasks = this.props.tasks.map((task, key) => {
            return (
                <Task 
                    task={task} 
                    key={key} 
                    arrKey={key} 
                    done={true}
                    uncheckTask={this.props.uncheckTask}
                />
            )
        })

        return listTasks
    }


    render() {
        return (
            <div >
                <h2 className="header">Завершено</h2>
                <ul>
                    {this.showTasks()}
                </ul>
            </div>
        );
    }
}

export default DoneList;