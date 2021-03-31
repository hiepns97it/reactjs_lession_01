import React, { Component, useState } from 'react';
//cach 1

/*
function ColorBox(props) {
    const [color, setColor] = useState('white');
    const [count, setCount] = useState(0);
    return (
        <div>
            {count} - <button onClick={() => setCount(x => x + 1)}>Increase</button>
            <br></br>
            {color}
            <button onClick={() => setColor('black')}>Change to black</button>
            <button onClick={() => setColor('while')}>Change to black</button>
        </div>
    );
}
*/


//cach 2

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'while',
            count: 0
        }
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={() => this.setState(e => ({
                    count: e.count + 1
                }))}>Increase</button>
                <br></br>
                {this.state.color}

                <button onClick={() => this.setState({ color: 'while' })}>Change to black</button>
                <button onClick={() => this.setState({ color: 'black' })}>Change to black</button>
            </div>
        )
    }
}

export default ColorBox;