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
    const [filterStatus, setFilterStatus] = useState('all');

    const HandleTotoClick = (val, idx) =>{
        // clone arr
        const newTodoList = [...todoList];
        console.log(val, idx);
        // toggle
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        };
        setTodoList(newTodoList);
    }
    const handleShowAllClick = () => {
        setFilterStatus('all');
    }
    const handleShowCompletedClick = () => {
        setFilterStatus('completed');
    }

    const handleShowNewClick = () => {
        setFilterStatus('new');
    }
    const  renderTodo = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    return (
        <div>
            <TodoList todoList={renderTodo} onTodoClick={HandleTotoClick}></TodoList>
            <div>
                <button onClick={handleShowAllClick}>Show all</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeatures;