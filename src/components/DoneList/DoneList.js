import React, { Component } from 'react';
import Task from '../Task/Task.js';

class DoneList extends Component {
    render() {
        return (
            <div >
                <h2 className="header">Завершено</h2>
                <ul>
                    <Task />
                    <Task />
                </ul>
            </div>
        );
    }
}

export default DoneList;