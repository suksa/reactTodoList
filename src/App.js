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
      {id:0,text:'react', checked:false,mody:false},
      {id:1,text:'javascript',checked:true,mody:false},
      {id:2,text:'webpack',checked:false,mody:false}
    ]
  }

  handleChange = (e)=>{
    this.setState({
      work:e.target.value
    })
  }
  enterAdd = (e)=>{
    //미구현
    const {works,work} = this.state;
    if(work==='')return false;
    if(e.key === 'Enter'){
      
    }
  }
  workAdd = ()=>{
    const {works,work} = this.state;
    if(work==='')return false;
    this.setState({
      works:[...works,{
        id:this.id++,
        text:work,
        checked:false,
        mody:false
      }],
      work:''
    })
  }
  workDelete = (index)=>{
    const {works} = this.state;
    this.setState({
      works:works.filter(work => work.id !== index)
    })
  }
  handleToggle = (index)=>{
    const {works} = this.state;
    const arrIndex = works.findIndex(work=>work.id === index);
    const select = works[arrIndex];
    const clone = [...works];
    clone[arrIndex] = {
      ...select,
      checked:!select.checked
    }
    this.setState({
      works:clone
    })
  }
  handleModify = (index)=>{
    const {works} = this.state;
    const arrIndex = works.findIndex(work=>work.id === index);
    const select = works[arrIndex];
    const clone = [...works];
    clone[arrIndex] = {
      ...select,
      mody:!select.mody
    }
    this.setState({
      works:clone
    });
  }
  modyChange = (e,index)=>{
    const {works} = this.state;
    const arrIndex = works.findIndex(work=>work.id === index);
    const select = works[arrIndex];
    const clone = [...works];
    clone[arrIndex] = {
      ...select,
      text:e.target.value
    }
    this.setState({
      works:clone
    });
  }
  render() {
    const {handleChange,
      workAdd,
      enterAdd,
      workDelete,
      handleToggle,
      handleModify,
      modyChange
    } = this;
    const {work,works} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Todo-list
          </p>
        </header>
        <section className="App-section">
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
              handleToggle={handleToggle}
              handleModify={handleModify}
              modyChange={modyChange}
            />
          </TodoListTemplate>
        </section>
      </div>
    );
  }
}

export default App;
