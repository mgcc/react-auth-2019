import React, { Component } from 'react';
import Cookies from 'universal-cookie';

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
  }

  signup(e) {
    e.preventDefault() //prevents the page from reloading

    const user = {
      name: document.getElementById('s-name').value,
      email: document.getElementById('s-email').value,
      password: document.getElementById('s-password').value
    }

    fetch(
      'http://localhost:3001/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(body => {
        if (body.success) {
          alert('successfully saved user')
        } else {
          alert('failed to save user')
        }
      })
  }

  login(e) {
    e.preventDefault() //prevents the page from reloading

    const credentials = {
      email: document.getElementById('l-email').value,
      password: document.getElementById('l-password').value
    }

    fetch(
      'http://localhost:3001/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      }
    )
    .then(response => response.json())
    .then(body => {
      if (body.success) {
        // Store token as a cookie
        const cookies = new Cookies()

        cookies.set(
          'authToken',
          body.token,
          {
            path: 'localhost:3001/',
            maxAge: 60 * 60 // 1 hour
          })

        // Store username as in localStorage
        localStorage.setItem('username', body.username)
      }
      else {
        alert('Failed to log in')
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form>
          <input type="text" id="s-name" placeholder="Name" /> &nbsp;
          <input type="text" id="s-email" placeholder="Email" /> &nbsp;
          <input type="password" id="s-password" placeholder="password" />&nbsp;

          <button id="signup" onClick={this.signup}>Sign Up</button>
        </form>

        <h2>Log In</h2>
        <form>
          <input type="text" id="l-email" placeholder="Email" /> &nbsp;
          <input type="password" id="l-password" placeholder="Password" />&nbsp;
          <button id="login" onClick={this.login}>Log In</button>
        </form>
      </div>
    )
  }
}