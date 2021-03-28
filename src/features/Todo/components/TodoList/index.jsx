import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
}

function TodoList(props) {
    const {} = props;
    return (
        <div>
            <ul>
                {props.todoList.map(value => (
                    <li key={value.id}>{value.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;