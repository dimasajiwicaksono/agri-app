import React, { useContext } from 'react'
import { Row, Col, Typography, Layout, Button } from 'antd';
import styles from './home.module.css';
import globalStyles from '../global.module.css'
import ecoFarming from '../../../Asset/image/ecoFarming.svg';
import urbanFarming from '../../../Asset/image/urbanFarming.svg';

import { settings } from '../../Utils/settings';
import { NavbarContext } from '../../../ContextAPI/Navbar/context';
import Skeleton from '../Skeleton';

function Home() {
  const { navbar } = useContext(NavbarContext)
  const { Title, Text } = Typography;
  const { Content } = Layout;

  return (
    <div style={{ marginTop: settings.isMobileView() ? 12 : 64 }}>
      {
        navbar.isloading ? (
          <Skeleton />
        ) : (

            <Layout className={globalStyles.layoutBg} >
              <Content className={styles.contentBody}>
                <Title className={styles.title}>Want to Contribute ?</Title>
                <h1 className={styles.title}>
                  Farming is the touch job, but at the heart of it all,
                  you'll see a vibrant community contributing to the future
                </h1>
                <div className={styles.rowBody}>
                  <Row gutter={12}>
                    <Col md={10} xs={24} >
                      {
                        settings.isMobileView() ? (
                          <div>
                            <img src={urbanFarming} alt='bg' className={styles.mobileImg} />
                            <div className={styles.btnWrap}>
                              <Button type='primary' className={styles.btnMobile}>Look at How We Do</Button>
                            </div>
                          </div>
                        ) : (
                            <div>
                              <Title level={3}>Find the Resource you need to get started</Title>
                              <Text>
                                In the process of internal desktop applications development,
                                many different design specs and implementations would be involved,
                                which might cause designers and developers difficulties and duplication
                                and reduce the efficiency of development.
                        </Text>
                              <div className={styles.btnWrap}>
                                <Button type='primary' >Look at How We Do</Button>
                              </div>
                            </div>
                          )
                      }

                    </Col>
                    <Col md={14} xs={24}>
                      {
                        settings.isMobileView() ?
                          null
                          :
                          <img src={ecoFarming} alt='bg' className={styles.webImg} />
                      }
                    </Col>
                  </Row>

                </div>
              </Content>
            </Layout>
          )
      }
    </div>
  )
}

export default Home;
