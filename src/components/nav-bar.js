import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { signoutUser } from '../actions';

class NavBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  onSignOut = (event) => {
    this.props.signoutUser(this.props.history);
  }

  render() {
    if (this.props.authenticated) {
      return (
        <nav className="nav-bar">
          <ul>
            <li className="nav-item" id="logo"><NavLink to="/" exact>Stuntin</NavLink></li>
            <li className="nav-item"><NavLink to="/posts/new">Create New Post</NavLink></li>
            <li className="nav-item"><NavLink to="/" onClick={this.onSignOut}>Sign Out</NavLink></li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="nav-bar">
          <ul>
            <li className="nav-item" id="logo"><NavLink to="/" exact>Stuntin</NavLink></li>
            <li className="nav-item"><NavLink to="/posts/new">Create New Post</NavLink></li>
            {/* <li className="nav-item"><NavLink to="/">Sign Out</NavLink></li> */}
            <li className="nav-item"><NavLink to="/signup">Sign Up</NavLink></li>
            <li className="nav-item"><NavLink to="/signin">Sign In</NavLink></li>
          </ul>
        </nav>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));

// const Nav = (props) => {
//   return (
//     <nav className="nav-bar">
//       <ul>
//         <li className="nav-item" id="logo"><NavLink to="/" exact>Stuntin</NavLink></li>
//         <li className="nav-item"><NavLink to="/posts/new">Create New Post</NavLink></li>
//         <li className="nav-item"><NavLink to="/">Sign Out</NavLink></li>
//         <li className="nav-item"><NavLink to="/signin">Sign In</NavLink></li>
//         <li className="nav-item"><NavLink to="/signup">Sign Up</NavLink></li>
//       </ul>
//     </nav>
//   );
// };
