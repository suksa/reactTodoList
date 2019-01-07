import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
    
`;
const Subject = styled.h2`
    margin:0.5em 0;
    font-size:1.6em;
    font-weight:700;
    text-align:center;
    color:#333
`;

class TodoListTemplate extends Component {
    render() {
        return (
            <Box>
                <Subject>Today List</Subject>
                {this.props.Add}
                {this.props.children}
            </Box>
        );
    }
}

export default TodoListTemplate;