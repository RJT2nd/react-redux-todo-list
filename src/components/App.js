import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div className="container">
    <div className="jumbotron">
      <h1 className="h1 text-center">To-Do List</h1><hr/>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </div>
);

export default App;