import React, { Component } from 'react';
import styled from 'styled-components';

const Search = styled.div`
    display:flex;
    height:30px;
    padding:0 1.5em;
    input {
        flex:1
        margin:0 0.5em 0 0
        border:0;
        border-bottom:1px solid #c71578
        outline:none
    };
`;

const Button = styled.button`
    width:4em;
    border-radius:0.4em;
    border:0
    background:#d23016;
    color:#fff;
    cursor:pointer
    &:hover {
        background:#d21653
    }
`;

class Add extends Component {
    render() {
        const {value,onChange,onClick,enterAdd} = this.props;
        return (
            <Search>
                <input
                    value={value}
                    onChange={onChange}
                    onKeyPress={(e)=>{
                        enterAdd(e);
                    }}
                />
                <Button 
                    onClick={()=>{
                        onClick();
                    }}
                >ADD</Button>
            </Search>
        );
    }
}

export default Add;