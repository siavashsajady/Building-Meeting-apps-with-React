import React, { Component } from 'react';

import { FaUsers } from 'react-icons/fa';
import { FaSignInAlt } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';

import { Link } from '@reach/router';

class Navigation extends Component {
  render() {
    const { user, logOutUser } = this.props;

    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <FaUsers className="mr-1" />
            MeetUp
          </Link>
          <div className="navbar-nav ml-auto">
            {user && (
              <Link className="nav-item nav-link" to="/meetings">
                Meetings
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/login">
                <FaSignInAlt className="mr-1" />
                Log in
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/register">
                Register `
              </Link>
            )}
            {user && (
              <Link
                className="nav-item nav-link"
                to="/login"
                onClick={e => logOutUser(e)}
              >
                <FaSignOutAlt className="mr-1" />
                Log out
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
