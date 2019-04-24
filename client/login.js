import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from './store';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = ({target}) => {
    const {name, value} = target;
    this.setState({[name]: value})
    // console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    this.props.login(email, password)
  }

  render() {
    const {handleChange, handleSubmit} = this;
    const {email, password} = this.state;

    return (
      <div className='h100 w100 flex column align-items-center justify-center'>
        <h1>Let's Loggin'!</h1>
        <div className='flex w50'>
          <img src='/loggin.png' />
          <form className='grow1' onSubmit={handleSubmit}>
            <div className='flex column'>
              <div className='flex column m1'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' className='input' onChange={handleChange} />
              </div>
              <div className='flex column m1'>
                <label htmlFor='email'>Password</label>
                <input type='password' name='password' className='input' onChange={handleChange} />
              </div>
              <div className='m1'>
                <button type='submit' className='btn bg-blue white p1 rounded'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(null, mapDispatchToProps)(Login)
