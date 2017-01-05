import React, {PropTypes, Component} from 'react';

class Login extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            'username': '',
            'password': ''
        }
    }

    onUsernameChange = ( event) => {
        this.setState({
            'username': event.target.value
        })
    };
    onPasswordChange = ( event) => {
        this.setState({
            'password': event.target.value
        })
    };

    render() {
        const {username, password} = this.state;
        return (
            <div>
                <form onSubmit={this.props.login.bind(null, username, password)}>
                    <p>{this.props.error}</p>
                    <input type="text" onChange={this.onUsernameChange} value={username}
                           placeholder="Username"/>
                    <input type="password" onChange={this.onPasswordChange} value={password}
                           placeholder="Password"/>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    //myProp: PropTypes.string.isRequired
};


export default Login;