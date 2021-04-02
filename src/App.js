import React from 'react';
import TodoFeatures from '../src/features/Todo';
import Album from '../src/features/Album';
import ColorBox from '../src/features/Color';

function App() {
    return (
        <div className="App">
            <TodoFeatures></TodoFeatures> {/* 1 */}
            {/* <Album></Album> */} {/* 2 */}
            {/*<ColorBox></ColorBox> {/* 3 */}
        </div>
    );
}

export default App;
