import React, {PropTypes} from 'react';
import '../../assets/css/task-row.css';

const TaskRow = ({task}) => {
    return (
        <tbody>
        <tr className="task-row">
            <td>Title</td>
            <td>{task.title}</td>
        </tr>
        <tr className="task-row">
            <td>Author</td>
            <td>{task.createdBy.username}</td>
        </tr>
        </tbody>
    );
};

TaskRow.propTypes = {
    task: PropTypes.object.isRequired
};

export default TaskRow;