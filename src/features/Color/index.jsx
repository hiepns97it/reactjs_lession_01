import React, { Component } from 'react';
import ColorBox from './components/ColorBox';


// cach 1
/*
function ColorFeatures(props) {
    return (
        <div>
            <ColorBox></ColorBox>
        </div>
    );
}
*/

// cach 2
class ColorFeatures extends Component {
    render() {
        return (
            <div>
                <ColorBox></ColorBox>
            </div>
        )
    }
}

export default ColorFeatures;