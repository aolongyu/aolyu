/**
 * login/box.jsx
 * 
 * @author aolyu
 * @created 2020/10/11 19:50:18
 */

import React, { Component } from 'react';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import styles from './index.module.less';

class Box extends Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.inputStyle}>
            <UserOutlined />
            <input className={styles.inputUsername} placeholder="username" type="text" />
            <br />
            <UnlockOutlined />
            <input className={styles.inputPassword} placeholder="password" type="password" />
            <br />
          </div>
          <input className={styles.submitBtn} type="button" value="登录" />
        </div>
      </div>
    );
  }
}

export default Box;