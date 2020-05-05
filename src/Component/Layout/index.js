import React, {/* useState */} from 'react'
// import ErrorPages from '../pages/Error/ErrorPages'
import HeaderLayout from '../NavBar/Header'
import FooterLayout from '../NavBar/Footer'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Calculator from '../pages/Calculator'
import Artikel from '../pages/Artikel'
import About from '../pages/About'
import Dictionary from '../pages/Dictionary'
import ApiDev from '../pages/ApiDev'
import NavbarContextProvider from '../../ContextAPI/Navbar/context';
import { settings } from '../Utils/settings';
import styles from './layout.module.css'

function LayoutIndex() {
  const { Content, Header} = Layout

  return (
    <div>
      <NavbarContextProvider>
        <Layout className={styles.container}>
        {
          settings.isMobileView() ? null : 
          <Header className={styles.header}>
            <HeaderLayout />
          </Header>
        }
        <Content className={styles.layoutContent}>
          {/* <ErrorPages /> */}
          <Switch>
            <Route exact path = '/' component={Home} />
            <Route path ='/Kamus' component={Dictionary} />
            <Route path = '/Kalkulator' component={Calculator} />
            <Route path ='/about' component={About} />
            <Route path ='/api dev' component={ApiDev} />
            <Route path ='/artikel' component={Artikel} />
          </Switch> 
        </Content>
        {
          settings.isMobileView() ? 
            <FooterLayout />
          : null
        }
        </Layout>
      </NavbarContextProvider>
    </div>
  )
}

export default LayoutIndex
