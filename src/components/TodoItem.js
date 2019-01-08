import React, { Component } from 'react';
import styled from 'styled-components';

const Line = styled.p`
  margin:0 1.5em;
  padding:0.7em 0.5em;
  border-bottom:1px solid #eee;
  color:#333;
  cursor:pointer
`;
const Button = styled.button`
  margin:0 0 0 0.3em;
  background:none;
  border:1px solid ${props=>props.color || '#000'};
  border-radius:0.4em;
  font-size:0.6em;
  color:${props=>props.color || '#000'};
  cursor:pointer;
`;
const Input= styled.input``;

class TodoItem extends Component {
  render() {
    const { id,text,del,checked,handleToggle,handleModify,mody,keyOn } = this.props;
    console.log(id)
    return (
      <Line onClick={()=>{
        handleToggle(id);
      }}>
      {
        mody?
        <Input
          type="text"
          value={text}
          onChange={(e)=>{
            keyOn(e,id);
          }}
          onClick={(e)=>{
            e.stopPropagation();
          }}
          onKeyPress={(e)=>{
            if(e.key === 'Enter'){
              handleModify(id);
            }
          }
          }
        />
        :text
      }
        <Button color='#ff0000' onClick={(e)=>{
          e.stopPropagation();
          del(id);
        }}>Deleted</Button>
        <Button color='#d23016' onClick={(e)=>{
          e.stopPropagation();
          handleModify(id);
        }}>Modified</Button>
        {
          checked && (<Button className="check-mark">✓</Button>)
        }
      </Line>
    );
  }
}

export default TodoItem;