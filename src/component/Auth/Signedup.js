import React, { Component } from 'react'

export class Signedup extends Component {
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
        console.log(this.state)
    }
    render() {
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

export default Signedup