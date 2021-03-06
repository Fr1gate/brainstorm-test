import React, { Component } from 'react';
import './Task.css'

class Task extends Component {
    constructor(props) {
        super(props)

        this.input = React.createRef();
        this.name = React.createRef();
        this.saveIcon = React.createRef();
        this.editIcon = React.createRef();

        /////  BINDS  /////
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleUncheck = this.handleUncheck.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleDelete() {
        this.props.deleteTask(this.props.arrKey)
    }
    handleCheck() {
        this.props.checkTask(this.props.arrKey)
    }
    handleUncheck() {
        this.props.uncheckTask(this.props.arrKey)
    }
    handleEdit() {
        this.name.current.style.display = 'none';
        this.input.current.style.display = 'inline-block';
        this.input.current.focus();
        this.editIcon.current.style.display = 'none';
        this.saveIcon.current.style.display = 'inline-block';

    }
    handleSave() {
        this.input.current.style.display = 'none';
        this.name.current.style.display = 'inline-block';
        this.saveIcon.current.style.display = 'none';
        this.editIcon.current.style.display = 'inline-block';

        this.props.editTask(this.props.arrKey, {name: this.input.current.value})
    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleSave();
        }
    }


    task() {

        if (!this.props.done) {
            return (
                <>
                    <div className="task__left">
                        <input  onClick={this.handleCheck} className="task__check-btn" type="checkbox" checked="" />
                        <span ref={this.name} className="task__name">{this.props.task.name}</span>
                        <input ref={this.input} onKeyPress={this.handleKeyPress} className="task__edit-field" />
                    </div>
                    <div className="task__right">
                        <button ref={this.editIcon} className="task__edit-btn" onClick={this.handleEdit}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0676 0.182259C15.9504 0.0650897 15.7915 -0.000732422 15.6258 -0.000732422C15.46 -0.000732422 15.3011 0.0650897 15.1839 0.182259L13.1251 2.24101L17.7589 6.87476L19.8176 4.81726C19.8758 4.7592 19.922 4.69023 19.9535 4.6143C19.985 4.53837 20.0012 4.45697 20.0012 4.37476C20.0012 4.29255 19.985 4.21115 19.9535 4.13522C19.922 4.05929 19.8758 3.99032 19.8176 3.93226L16.0676 0.182259ZM16.8751 7.75851L12.2414 3.12476L4.11637 11.2498H4.37512C4.54088 11.2498 4.69986 11.3156 4.81707 11.4328C4.93428 11.55 5.00012 11.709 5.00012 11.8748V12.4998H5.62512C5.79088 12.4998 5.94986 12.5656 6.06707 12.6828C6.18428 12.8 6.25012 12.959 6.25012 13.1248V13.7498H6.87512C7.04088 13.7498 7.19986 13.8156 7.31707 13.9328C7.43428 14.05 7.50012 14.209 7.50012 14.3748V14.9998H8.12512C8.29088 14.9998 8.44986 15.0656 8.56707 15.1828C8.68428 15.3 8.75012 15.459 8.75012 15.6248V15.8835L16.8751 7.75851ZM7.54012 17.0935C7.51382 17.0236 7.50027 16.9495 7.50012 16.8748V16.2498H6.87512C6.70936 16.2498 6.55039 16.1839 6.43318 16.0667C6.31597 15.9495 6.25012 15.7905 6.25012 15.6248V14.9998H5.62512C5.45936 14.9998 5.30039 14.9339 5.18318 14.8167C5.06597 14.6995 5.00012 14.5405 5.00012 14.3748V13.7498H4.37512C4.20936 13.7498 4.05039 13.6839 3.93318 13.5667C3.81597 13.4495 3.75012 13.2905 3.75012 13.1248V12.4998H3.12512C3.0504 12.4996 2.97631 12.4861 2.90637 12.4598L2.68262 12.6823C2.62306 12.7422 2.57628 12.8137 2.54512 12.8923L0.0451238 19.1423C-0.000339531 19.2558 -0.0114689 19.3803 0.0131154 19.5001C0.0376997 19.62 0.0969166 19.7299 0.183425 19.8165C0.269933 19.903 0.379928 19.9622 0.499773 19.9868C0.619619 20.0114 0.744044 20.0002 0.857624 19.9548L7.10762 17.4548C7.1862 17.4236 7.25764 17.3768 7.31762 17.3173L7.54012 17.0948V17.0935Z"/>
                            </svg> 
                        </button>
                        <button ref={this.saveIcon} className="task__save-btn" onClick={this.handleSave}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 20 20" width="24" fill="none"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/></svg>
                        </button>
                        <button className="task__delete-btn" onClick={this.handleDelete}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.419604 0.419604C0.552277 0.286595 0.709888 0.181067 0.883407 0.109064C1.05693 0.0370616 1.24295 0 1.43081 0C1.61868 0 1.8047 0.0370616 1.97822 0.109064C2.15174 0.181067 2.30935 0.286595 2.44202 0.419604L10.0004 7.98082L17.5587 0.419604C17.6915 0.286811 17.8492 0.181473 18.0227 0.109605C18.1962 0.0377376 18.3821 0.00074779 18.5699 0.00074779C18.7577 0.00074779 18.9437 0.0377376 19.1172 0.109605C19.2907 0.181473 19.4484 0.286811 19.5811 0.419604C19.7139 0.552398 19.8193 0.710047 19.8911 0.88355C19.963 1.05705 20 1.24301 20 1.43081C20 1.61861 19.963 1.80457 19.8911 1.97808C19.8193 2.15158 19.7139 2.30923 19.5811 2.44202L12.0199 10.0004L19.5811 17.5587C19.7139 17.6915 19.8193 17.8492 19.8911 18.0227C19.963 18.1962 20 18.3821 20 18.5699C20 18.7577 19.963 18.9437 19.8911 19.1172C19.8193 19.2907 19.7139 19.4484 19.5811 19.5811C19.4484 19.7139 19.2907 19.8193 19.1172 19.8911C18.9437 19.963 18.7577 20 18.5699 20C18.3821 20 18.1962 19.963 18.0227 19.8911C17.8492 19.8193 17.6915 19.7139 17.5587 19.5811L10.0004 12.0199L2.44202 19.5811C2.30923 19.7139 2.15158 19.8193 1.97808 19.8911C1.80457 19.963 1.61861 20 1.43081 20C1.24301 20 1.05705 19.963 0.88355 19.8911C0.710047 19.8193 0.552398 19.7139 0.419604 19.5811C0.286811 19.4484 0.181473 19.2907 0.109605 19.1172C0.0377376 18.9437 0.00074779 18.7577 0.00074779 18.5699C0.00074779 18.3821 0.0377376 18.1962 0.109605 18.0227C0.181473 17.8492 0.286811 17.6915 0.419604 17.5587L7.98082 10.0004L0.419604 2.44202C0.286595 2.30935 0.181067 2.15174 0.109064 1.97822C0.0370616 1.8047 0 1.61868 0 1.43081C0 1.24295 0.0370616 1.05693 0.109064 0.883407C0.181067 0.709888 0.286595 0.552277 0.419604 0.419604Z" />
                            </svg>
                        </button>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="task__left">
                        <input onClick={this.handleUncheck} className="task__check-btn" type="checkbox" checked="checked" />
                        <span className="task__name task__name_done">{this.props.task.name}</span>
                    </div>
                    <div className="task__right">

                    </div>
                </>
            )
        }
    }

    render() {
        return (
            <li className="task">
                {this.task()}
            </li>
        );
    }
}

Task.defaultProps = {
    task: {
        name: 'default Task'
    },
    done: null,
    key: null
}

export default Task;