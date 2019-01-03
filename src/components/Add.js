import React, { Component } from 'react';

class Add extends Component {
    
    render() {
        const {value,onChange,onClick,enterAdd} = this.props;
        return (
            <div>
                <input
                    value={value}
                    onChange={onChange}
                    onKeyPress={enterAdd}
                />
                <button onClick={onClick}>추가</button>
            </div>
        );
    }
}

export default Add;