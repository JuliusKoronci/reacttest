import React, {Component} from 'react';
import '../assets/css/App.css';
import logo from '../assets/logo.svg';
import Login from './Login';
import TaskList from './TaskList';

class App extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            'authenticated': false,
            'loginError': ''
        }
    }

    componentWillMount() {
        let token = localStorage.getItem('id_token');
        if (token && token != '') {
            this.setState({
                'authenticated': true
            });
        }
    }

    login = (username, password, event) => {
        event.preventDefault();
        const loginUri = 'http://localhost:8000/api/v1/token-authentication';
        const creds = {username: username.trim(), password: password.trim()};

        let config = {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `username=${creds.username}&password=${creds.password}`
        };

        fetch(loginUri, config).then(response =>
            response.json().then(user => ({user, response}))
        ).then(({user, response}) => {
            if (!response.ok) {
                //Nastala chyba
                this.setState({
                    'loginError': user.message,
                });
            } else {
                // If login was successful, set the token in local storage
                localStorage.setItem('id_token', user.token);
                // Dispatch the success action
                this.setState({
                    'authenticated': true,
                });
            }
        }).catch(err => console.log("Error: ", err));
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Task Manager v1</h2>
                </div>
                <div id="container">
                    {!this.state.authenticated && <Login error={this.state.loginError} login={this.login}/>}
                    {this.state.authenticated && <TaskList />}
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}


export default App;