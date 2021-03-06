import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../redux/actions/authAction';
import { Redirect } from 'react-router-dom';

export class SignedUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email : '',
            password : '',
            firstName : '',
            lastName : ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    } 
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
    render() {
        if(this.props.auth.uid){
            return <Redirect exact to='/'/>
        }
        return (
            <div className='container'>
                <h3 className='text-center mt-4'>Sign Up</h3>
                <form className='mt-4 w-50 mx-auto' onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Email">Email address</label>
                        <input type="email" name='email' onChange={this.handleChange} className="form-control" id="Email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" name='password' onChange={this.handleChange} className="form-control" id="Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name='firstName' onChange={this.handleChange} className="form-control" id="firstName" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name='lastName' onChange={this.handleChange} className="form-control" id="lastName" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div>
    
        )
    }
}

const mapStateToProps = state => {
    return{
        auth : state.firebase.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp : (cred) => dispatch(signUp(cred))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignedUp)