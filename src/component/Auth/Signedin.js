import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authAction';
import { Redirect } from 'react-router-dom';

export class Signedin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email : '',
            password : ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    } 
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state)
    }
    render() {
        if(this.props.auth.uid){
            return <Redirect exact to='/'/>
        }
        return (
            <div className='container'>
                <h3 className='text-center mt-4'>Login</h3>
                <form className='mt-4 w-50 mx-auto' onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Email">Email address</label>
                        <input type="email" name='email' onChange={this.handleChange} className="form-control" id="Email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" name='password' onChange={this.handleChange} className="form-control" id="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
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
        login : (cred) => dispatch(login(cred))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signedin)