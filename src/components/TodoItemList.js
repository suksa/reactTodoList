import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    
    render() {
        const {works,del} = this.props;
        const workList = works.map( ({id,text})=>(
            <TodoItem
                key={id}
                text={text}
                del={del}
            />
        ) )
        return (
            <div>
                {workList}
            </div>
        );
    }
}

export default TodoItemList;