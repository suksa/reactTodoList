import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { text,del } = this.props;
    
    return (
      <div>
          <p>{text} <button onClick={del}>삭제</button></p>
      </div>
    );
  }
}

export default TodoItem;