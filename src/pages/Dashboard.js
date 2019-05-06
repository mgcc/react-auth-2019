import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default class Dashboard extends Component {


  constructor(props) {
    super(props)

    this.state = {
      checkedIfLoggedIn: false,
      loggedIn: false,
      username: localStorage.getItem('username')
    }

    fetch(
      'http://localhost:3001/checkifloggedin',
      {
        method: 'POST',
        credentials: 'include'
      })
      .then(response => response.json())
      .then(body => {
        if (!body.loggedIn) {
          this.setState({ checkedIfLoggedIn: true, loggedIn: false })
        }
        else {
          this.setState({ checkedIfLoggedIn: true, loggedIn: true})
        }
      })

      this.logout = this.logout.bind(this)
  }

  logout(e) {
    e.preventDefault()
    const cookies = new Cookies();
    cookies.remove('authToken')
    this.setState({ loggedIn: false })
  }

  render() {

    if (!this.state.checkedIfLoggedIn) {
      return (
        <div></div>
      )
    }
    else {
      if (this.state.loggedIn) {
        return (
          <div>
            Welcome to the Dashboard, {this.state.username}!
            <br />
            <button onClick={this.logout} id='logout'>Log Out</button>
          </div>
        )
      }

      else {
        return <Redirect to='/' />
      }
    }
  }
}