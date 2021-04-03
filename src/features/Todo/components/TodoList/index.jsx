import React from 'react';
import PropTypes from 'prop-types';
import classnames  from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (val, idx) => {
        if(!onTodoClick) return;
        onTodoClick(val, idx);
    };

    return (
        <div>
            <ul className='todo-list'>
                {todoList.map((value, index) => (
                    <li 
                    className={classnames(
                        {
                            'todo-item': true,
                            completed: value.status === 'completed'
                        }
                    )}
                    key={value.id}
                    onClick={() => handleTodoClick(value, index)}
                    >
                        {value.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;