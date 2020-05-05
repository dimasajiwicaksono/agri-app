import React, { useState, useEffect, useContext } from 'react';
import { Layout, Menu } from 'antd';
import styles from '../../NavBar/styles.module.css';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../../../ContextAPI/Navbar/context';
import { GET_API_NAVBAR } from '../../../ContextAPI/Navbar/store';
import { SET_DATA_NAVBAR } from '../../../ContextAPI/Navbar/action';
import { AppstoreOutlined } from '@ant-design/icons';


function Footer() {
  const { navbar, dispatch } = useContext(NavbarContext)
  const optNavbar = [];

  const [key] = useState(['1'])

  useEffect(() => {
    GET_API_NAVBAR()
      .then(res => {
        const { data } = res.data
        dispatch({
          type: SET_DATA_NAVBAR,
          payload: {
            data: data,
            isloading: false
          }
        })
      }
      )
      .catch(err => console.log(err))

  }, [dispatch])

  if(navbar.data.length ) {
    const filterData = navbar.data.filter(val => val.key < 4 && val.menuName !== 'KALKULATOR')
    filterData.map( val => 
      optNavbar.push({
        key : val.key,
        menuName: val.menuName,
        disabled: val.disabled,
        icon: <AppstoreOutlined/>
      }))
  }

  return (
    <div >
      <Layout className={styles.Footer}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={key} className={styles.MenuFooter}>
            {
              optNavbar.map((val, index) =>
                <Menu.Item
                  key={val.key}
                  disabled={val.disabled}
                >
                 {val.icon}
                  <Link to={val.menuName === 'HOME' ? '/' : `${val.menuName.toLocaleLowerCase()}`}><strong>{val.menuName}</strong></Link>
                </Menu.Item>
              )
            }
          </Menu>
      </Layout>
    </div>
  )
}

export default Footer
