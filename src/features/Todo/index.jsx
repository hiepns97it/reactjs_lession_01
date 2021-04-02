import React,  { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import userEvent from '@testing-library/user-event';

TodoFeatures.propTypes = {

};

function TodoFeatures(props) {
    const InitTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ]

    const [todoList, setTodoList] = useState(InitTodoList);

    const HandleTotoClick = (val, idx) =>{
        debugger
        console.log(val, idx);
    }
    return (
        <div>
            <TodoList todoList={todoList} onTodoClick={HandleTotoClick}></TodoList>
        </div>
    );
}

export default TodoFeatures;