import React from 'react';
import ListForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.css';

const tasks = [
  {
    name: 'Put up Christmas tree',
    id: 1234,
    completed: false,
  },
  {
    name: 'Hang stockings',
    id: 4321,
    completed: false,
  },
  {
    name: 'Send out Christmas Cards',
    id: 7894,
    completed: false,
  },
  {
    name: 'Bake cookies',
    id: 6547,
    completed: false,
  },
  {
    name:'Shop for gifts',
    id: 9632,
    completed: false,
  },
  {
    name: 'Volunteer at shelter',
    id: 1478,
    completed: false,
  },
  {
    name: 'Visit Grandma',
    id: 1823,
    completed: false,
  },
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

// constructor() {
  // super();
  state ={
    task: tasks,
  }
// }

addItem = newItemText => {
  const newItem = {
    name: newItemText,
    id: Date.now(),
    completed: false
  };
  this.setState({
    task: [...this.state.task, newItem]
  });
};

toggleItem = itemId => {
  this.setState({
    task: this.state.task.map(item => {
      if(item.id === itemId) {
        return {
          ...item, completed: !item.completed
        };
      } else {
        return item;
      }
    })
  });
};

clearCompleted = () => {
  return(
    <div>
      if 
    </div>
  );
}

  render() {
    return (
      <div>
        <h2>Welcome to your To Do List!</h2>
        <ListForm addItem={this.addItem}/>
        
        <TodoList 
          toggleItem={this.toggleItem}
          task={this.state.task} />
      </div>
      
      
    );
  }
}

export default App;
