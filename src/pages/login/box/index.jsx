/**
 * login/box.jsx
 * 
 * @author aolyu
 * @created 2020/10/11 19:50:18
 */

import React, { Component } from 'react';
import styles from './index.module.less';

class Box extends Component {

  render() {
    return (
      <div className={styles.container}>
        <input placeholder="username" type="text" />
        <input placeholder="password" type="password" />
      </div>
    );
  }
}

export default Box;