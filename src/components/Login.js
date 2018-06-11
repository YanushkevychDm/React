import React from 'react';
import PropTypes from "prop-types";

const Login = (props) => (
  <nav className="Inv login">
    <h2>Inventory login</h2>
    <p>Sign in to manage your store's inventory.</p>
    <button className="github" onClick={() => props.authenticate('Github')}>Log in with GitHub</button>
    <button className="facebook" onClick={() => props.authenticate('Facebook')}>Log in with GitHub</button>
  </nav>
);

Login.PropType = {
  authenticate: PropTypes.func.isRequired
};

export default Login;