import React, {PropTypes} from 'react';
import Task from './TaskRow';

const List = ({tasks}) => {
    return (
        <table>
            {tasks.map((task, i) => {
                return <Task task={task}/>
            })}
        </table>
    );
};

List.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default List;