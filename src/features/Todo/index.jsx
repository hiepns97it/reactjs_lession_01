import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeatures.propTypes = {
    
};

function TodoFeatures(props) {
    const todoList = [
        {
            id: 1,
            title: "Eat"
        },
        {
            id: 2,
            title: "Sleep"
        },
        {
            id: 3,
            title: "Code"
        }
    ]

    return (
        <div>
            <TodoList todoList={todoList}></TodoList>
        </div>
    );
}

export default TodoFeatures;