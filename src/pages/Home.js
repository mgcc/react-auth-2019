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

    // Send a POST request to /signup
    // ---
  }

  login(e) {
    e.preventDefault() //prevents the page from reloading

    const credentials = {
      email: document.getElementById('l-email').value,
      password: document.getElementById('l-password').value
    }

    // Send POST request to /login
    // ---
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