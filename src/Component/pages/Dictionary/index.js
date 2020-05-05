import React, { useState, useContext } from 'react'
import { Row, Col, Menu, Spin, Card, Layout } from 'antd'
import FormIndex from './Form'
import styles from './styles.module.css'
import DetailLayout from './detail'
import { NavbarContext } from '../../../ContextAPI/Navbar/context'
import DictionariesContextProvider from '../../../ContextAPI/Dictionary/contexts';
import { settings } from '../../Utils/settings'

function Dictionary() {

  const layout = {
    md: { span: 8 },
    lg: { span: 8 },
    xs: { span: 24 }
  }

  const { navbar } = useContext(NavbarContext)
  const optMenuSide = []

  const [key, setKey] = useState(0)
  const [defaultSelectedKeys] = useState(['0'])
  const [loadingDetail] = useState(false);
  const [data] = useState([]);

  const handleKey = (e, param) => {
    e === 'isWeb' ? setKey(parseInt(param.key)) : setKey(param) ;
  }


  if (navbar.data.length) {
    const menuSide = navbar.data.filter(val => val.menuCode === '200' && val.menuName === 'KAMUS')
    menuSide[0].children.map(item =>
      optMenuSide.push({
        subMenuName: item.subMenuName,
        subMenuCode: item.subMenuCode,
        desc: item.desc,
        icon: item.icon,
        key: item.key
      })
    )
  }

  return (
    <div>
      <Layout style={{marginTop:64, marginLeft:'2em', marginRight:'2em', backgroundColor:'white'}}>
        <div className={styles.BodyDictionar}>
        <DictionariesContextProvider>
          <Row gutter={8}>
            {
              settings.isMobileView() ? 
              /* ============== Mobile VIEW================ */
                <Col {...layout} style={{marginBottom: '5vh'}}>
                <Row gutter={8}>
                  {
                    optMenuSide.map((item, index) => 
                      <Col span={8} key={index}>
                        <Card
                          onClick={() => handleKey('isMobile', index)}
                          hoverable
                          style={{borderRadius:12}}
                          bordered={false}
                          cover={
                            <img src={item.icon} 
                              alt={item.subMenuCode} 
                              style={{width: 50, marginLeft: '25%', paddingTop:'1em'}} 
                            />
                          }
                        >
                          <Card.Meta description={item.desc} style={{paddingLeft:'5%'}}/>
                        </Card>
                      </Col>
                      )
                  }
                </Row>
              </Col> 
              :
              /* ==============WEB VIEW================ */
              <Col {...layout}>
              <Menu
                theme='light'
                defaultSelectedKeys={defaultSelectedKeys}
                onClick={(param) => handleKey('isWeb', param)}
              >
                {
                  optMenuSide.map((val, index) =>
                    <Menu.Item
                      key={val.key}
                      style={{ height: '15vh' }}
                    >
                      <Row>
                        <Col span={8}>
                          <img src={val.icon} alt={val.subMenuCode} style={{ width: 80 }} />
                        </Col>
                        <Col span={14}>
                          <Row style={{ marginBottom: 0 }}>
                            <strong>{val.subMenuName}</strong>
                          </Row>
                          <Row style={{ marginTop: 0 }}>
                            {val.desc}
                          </Row>
                        </Col>
                      </Row>
                    </Menu.Item>)
                }
              </Menu>
            </Col> 
            }
            <Col {...layout}>
              <FormIndex handleKey={key} />
            </Col>
            <Col {...layout}>
              <div>
                {
                  loadingDetail ?
                    <Spin spinning={loadingDetail}>
                      <div>Please Wait</div>
                    </Spin> : null
                } {
                  loadingDetail === false && data.length > 0 && (
                    <DetailLayout dataDetail={data} />
                  )
                }
              </div>
            </Col>
          </Row>
        </DictionariesContextProvider>
      </div>
      </Layout>
    </div>
  )
}

export default Dictionary
