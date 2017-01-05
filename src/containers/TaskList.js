import React, {PropTypes, Component} from 'react';
import List from '../components/Tasks/List';

class TaskList extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            'tasks': []
        }
    }

    componentDidMount() {
        const loginUri = 'http://localhost:8000/api/v1/task-bundle/tasks';
        let config = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('id_token')
            }
        };

        fetch(loginUri, config)
            .then(response =>
                response.json().then(tasks => ({tasks, response}))
            ).then(({tasks, response}) => {
            if (!response.ok) {
                //Nastala chyba
                alert(tasks.message);
            } else {
                this.setState({
                    'tasks': tasks.data
                })
            }
        }).catch(err => console.log("Error: ", err));
    }

    render() {
        return (
            <div>
                <h2>Task List</h2>
                <List tasks={this.state.tasks}/>
            </div>
        );
    }
}

TaskList.propTypes = {
    //myProp: PropTypes.string.isRequired
};


export default TaskList;