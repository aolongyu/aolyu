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
        <div className={styles.footer}>
          <span>Copyright © aolyu   闽ICP备520号-1    福建省福州市大学新区学府南路33号 350118</span>
        </div>
      </div>
    );
  }
}

export default Login;