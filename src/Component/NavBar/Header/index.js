import React, { useState, useEffect, useContext } from 'react';
import { Layout, Menu } from 'antd';
import styles from '../../NavBar/styles.module.css';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../../../ContextAPI/Navbar/context';
import { GET_API_NAVBAR } from '../../../ContextAPI/Navbar/store';
import { SET_DATA_NAVBAR } from '../../../ContextAPI/Navbar/action';

function HeaderLayout() {
  const { navbar, dispatch } = useContext(NavbarContext)
  // const { Header } = Layout
  const [key] = useState(['0'])

  useEffect(() => {
    GET_API_NAVBAR()
      .then(res => {
        const { data } = res.data
        dispatch({
          type: SET_DATA_NAVBAR,
          payload: {
            data: data,
            isloading: false,
          }
        })
      }
      )
      .catch(err => console.log(err))

  }, [dispatch])

  return (
    <div >
      <Layout style={{ marginBottom: 30 }} className={styles.Header}>
        {/* <Header className={styles.Header} > */}
        <div className={styles.logo} />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={key}>
          {
            navbar.data.map((val, index) =>
              <Menu.Item
                key={val.key}
                className={styles.Menu}
                disabled={val.disabled}
              >
                <Link to={val.menuName === 'HOME' ? '/' : `${val.menuName.toLocaleLowerCase()}`}><strong>{val.menuName}</strong></Link>
              </Menu.Item>
            )
          }
        </Menu>
        {/* </Header> */}
      </Layout>
    </div>
  )
}

export default HeaderLayout
