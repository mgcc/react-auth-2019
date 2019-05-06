import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default class Dashboard extends Component {


  constructor(props) {
    super(props)

    this.state = {
    
    }

    // Send POST request to check if user is logged in
    // ---

      this.logout = this.logout.bind(this)
  }

  logout(e) {
    e.preventDefault()
    // Clear auth token
    // ---
  }

  render() {

    // Check if logged in first
    if (!this.state.checkedIfLoggedIn) {
      return (
        <div></div>
      )
    }
    
    
    else {
      // If logged in render the page
      if (this.state.loggedIn) {
        return (
          <div>
            Welcome to the Dashboard, {this.state.username}!
            <br />
            <button onClick={this.logout} id='logout'>Log Out</button>
          </div>
        )
      }

      // If not logged in, redirect to homepage
      else {
        return <Redirect to='/' />
      }
    }
  }
}