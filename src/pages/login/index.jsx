/**
 * login.jsx
 * 
 * @author aolyu
 * @created 2020/10/11 19:47:05
 */

import React, { Component } from 'react';

import Box from './box/index';

import styles from './index.module.less';

class Login extends Component {

  render() {
    return (
      <div className={styles.container}>
        <h1>aolyu</h1>
        <Box />
      </div>
    );
  }
}

export default Login;