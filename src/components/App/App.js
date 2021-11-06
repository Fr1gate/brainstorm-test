import React from 'react';
import SideMenu from '../SideMenu/SideMenu';
import Tasks from '../Tasks/Tasks';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('state')) {
      this.state = this.loadState()
    } else {
      this.state = {
        selectedCategory: 1,
        tasksCategories: [
          {
            categoryName: 'Работа',
            tasksToDo: [
              {
                name: 'Первое задание'
              }
            ],
            tasksDone: [
              {
                name: 'Первое завершенное задание'
              }
            ]
          },
          {
            categoryName: 'Дом',
            tasksToDo: [
              {
                name: 'Второе задание'
              }
            ],
            tasksDone: [
              {
                name: 'Второе завершенное задание'
              }
            ]
          },
          {
            categoryName: 'Семья',
            tasksToDo: [
              {
                name: 'Третье задание'
              }
            ],
            tasksDone: [
              {
                name: 'Третье завершенное задание'
              }
            ]
          },
        ]
      }
    }

    /////  BINDS  /////
    this.chooseCategory = this.chooseCategory.bind(this)
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.checkTask = this.checkTask.bind(this);
    this.uncheckTask = this.uncheckTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.saveState = this.saveState.bind(this);
    this.loadState = this.loadState.bind(this);
  }

  componentDidUpdate() {
    this.saveState();
  }

  chooseCategory(key) {
    this.setState({
      selectedCategory: key
    });
  }

  addTask(task) {
    let newState = this.state;
    newState.tasksCategories[this.state.selectedCategory].tasksToDo.push(task)

    this.setState(newState)
  }

  deleteTask(key) {
    let newState = this.state;
    newState.tasksCategories[this.state.selectedCategory].tasksToDo.splice(key, 1)

    this.setState(newState)
  }

  checkTask(key) {
    let newState = this.state;
    let task = newState.tasksCategories[this.state.selectedCategory].tasksToDo[key]
    newState.tasksCategories[this.state.selectedCategory].tasksDone.push(task)
    newState.tasksCategories[this.state.selectedCategory].tasksToDo.splice(key, 1)

    this.setState(newState)
  }

  uncheckTask(key) {
    let newState = this.state;
    let task = newState.tasksCategories[this.state.selectedCategory].tasksDone[key]
    newState.tasksCategories[this.state.selectedCategory].tasksToDo.push(task)
    newState.tasksCategories[this.state.selectedCategory].tasksDone.splice(key, 1)

    this.setState(newState)
  }

  editTask(key, task) {
    //only for unchecked tasks
    let newState = this.state;
    newState.tasksCategories[this.state.selectedCategory].tasksToDo[key].name = task.name;

    this.setState(newState)
  }

  saveState() {
    localStorage.setItem('state', JSON.stringify(this.state))
  }

  loadState() {
    return JSON.parse(localStorage.getItem('state'))
  }

  render() {
    return (
      <div className="page">
        <SideMenu 
          categories={this.state.tasksCategories}
          selectedCategory={this.state.selectedCategory}
          onCategoryChange={this.chooseCategory}
          />
        <Tasks
          category={this.state.tasksCategories[this.state.selectedCategory]}
          addTask={this.addTask}
          deleteTask={this.deleteTask}
          checkTask={this.checkTask}
          uncheckTask={this.uncheckTask}
          editTask={this.editTask}
          />
      </div>
    )
  }


}

export default App;
