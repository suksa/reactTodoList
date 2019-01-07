import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    
    render() {
        const {works,del,handleToggle,handleModify,modyChange} = this.props;
        const workList = works.map(({id,text,checked,mody})=>(
            <TodoItem
                id={id}
                key={id}
                checked={checked}
                text={text}
                del={del}
                mody={mody}
                handleToggle={handleToggle}
                handleModify={handleModify}
                keyOn={modyChange}
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