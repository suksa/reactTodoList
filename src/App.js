import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import TodoListTemplate from './components/TodoListTemplate';
import Add from './components/Add';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3;

  state = {
    work:'',
    works: [
      {id:0,text:'react'},
      {id:1,text:'javascript'},
      {id:2,text:'webpack'}
    ]
  }

  handleChange = (e)=>{
    this.setState({
      work:e.target.value
    })
  }
  enterAdd = (e)=>{
    //미구현
    if(e.key === 'Enter'){
      this.search.focus()
    }
  }
  workAdd = ()=>{
    const {works,work} = this.state;
    this.setState({
      works:[...works,{
        id:this.id++,
        text:work
      }],
      work:''
    })
  }
  workDelete = ()=>{
    console.log(1)
    this.setState({
      
    })
  }
  render() {
    const {handleChange,workAdd,enterAdd,workDelete} = this
    const {work,works} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Todo-list
          </p>
        </header>
        <section>
          <TodoListTemplate Add={
            <Add
              value={work}
              onChange={handleChange}
              onClick={workAdd}
              enterAdd={enterAdd}
            />
          }>
            <TodoItemList
              works={works}
              del={workDelete}
            />
          </TodoListTemplate>
        </section>
      </div>
    );
  }
}

export default App;
