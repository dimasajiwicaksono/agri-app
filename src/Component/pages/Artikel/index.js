import React from 'react'
import { Typography, Layout, Row, Col, Card, Carousel, Avatar } from 'antd'
import { settings } from '../../Utils/settings';
import globalStyles from '../global.module.css'
import styles from './article.module.css'
// import ErrorPages from '../Error/ErrorPages'

function Artikel() {
  const { Title } = Typography;
  const { Content } = Layout;


const data = [
  {
    id: 1,
    title: 'Pertanian Terkini',
    desc: 'Habitual action fro daily life',
    img: 'https://miro.medium.com/max/1200/1*fBrxY5POAa39B7E4fxYrbw.jpeg'
  },
  {
    id: 2,
    title: 'Data Visualization For Agritech',
    desc: 'Habitual action fro daily life',
    img: 'https://miro.medium.com/max/2000/1*INE-ZJA6HUc4JnRblZPzpA.png'
  },
  {
    id: 3,
    title: 'Sobat Tani',
    desc: 'Habitual action fro daily life',
    img: 'https://miro.medium.com/max/1400/1*RldyrFWyMYS5mhvUNmkw7g.jpeg'
  }
]

const user = [
  {
    id: 1,
    name: 'Dimas Aji Wicaksono',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    message: 'I love Medium’s new publications OneZero, GEN, Heated. And, I’m especially excited about Tenderly' 
  },
  {
    id: 2,
    name: 'Fajar Surya Kencana',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    message: 'Dunia tak lagi sama tak selamanya memihak kita, disaat kita mau berusaha di situlah kebahagiaan akan indah pada waktunya.' 
  },
  {
    id: 3,
    name: 'Jonathan Cristie',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    message: 'Belajarlah rendah hati, rendahkan hatimu serendah-rendahnya hingga tidak ada seorangpun yang bisa merendahkanmu.' 
  },
  {
    id: 4,
    name: 'Panji Danutirto',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    message: 'Hidup itu sebentar. Kamu harus bisa tersenyum saat merasakan kepedihan atau kita tak akan pernah melanjutkan hidup' 
  },
]
  return (
    <div className={globalStyles.layoutBg}>
      {/* <ErrorPages /> */}
      <Layout className={globalStyles.layoutContent}>

        {/*===================================================================== */}

        <Content className={styles.contentTitleTop}>
          <h1 className={styles.titleTop}>
            <strong>
              Get smarter about what matters to you.
            </strong>
          </h1>
        </Content>

        {/*===================================================================== */}

        <Content style={{ marginTop: settings.isMobileView() ? '15vh' : 0 }}>
          <Row>
            <Col><Title style={{ fontSize: settings.isMobileView() ? '2.75em' : '4em' }}>No ads.</Title></Col>
            <Col><Title style={{ fontSize: settings.isMobileView() ? '2.75em' : '4em' }}>No Problems.</Title> </Col>
          </Row>
          <Title level={3} type='secondary'>Your privacy stays yours. We don’t sell your data or target you with ads. Ever.</Title>
        </Content>

        {/*===================================================================== */}

        <Content style={{ marginTop: '5vh' }}>
          <Row>
            <Col md={8} xs={24}><Title style={{ fontSize: settings.isMobileView() ? '2em' : '4em' }}>120 million curious readers and growing.</Title></Col>
            <Col md={16} xs={24} style={{ backgroundColor: '#c9ffd9' }}>
              <Carousel autoplay
                style={
                  {
                    height: 300,
                    marginLeft: settings.isMobileView() ? 20 : 100,
                    marginRight: 20,
                    marginTop: 50,

                  }
                }
                dots={true}
              >
                {
                  user.map((user, index) => 
                  <div key ={index}>
                    <div style={{ height: '30vh' }}>
                      <Title level={3} key={user.id}>{user.message}</Title>
                    </div>
                  <div>
                    <Card style={{ background: 'transparent' }} bordered={false} key={user.id}>
                      <Card.Meta
                        avatar={<Avatar src={user.avatar} key={user.id}/>}
                        title={user.name}
                      // description="This is the description"
                      />
                    </Card>
                  </div>
                </div>
                  )
                }
                
              </Carousel>
            </Col>
          </Row>
        </Content>

        {/*===================================================================== */}

        <Content style={{ marginTop: '5vh', margin: '5vh' }}>
          <Title style={{ fontSize: settings.isMobileView() ? '1.75em' : '4em', textAlign: 'center', margin: 0 }}>Expand your reading.</Title>
          <Title style={{ fontSize: settings.isMobileView() ? '1.75em' : '4em', textAlign: 'center', margin: 0 }}>Expand your mind.</Title>
        </Content>
        <hr style={{ border: 'solid black', width: '50%' }} />

        {/*===================================================================== */}

        <Content style={{ marginTop: '5vh' }}>
          <Row gutter={20}>
            {
              data.map((item, index) =>
                <Col md={8} xs={24} key={index}>
                  <Card
                    hoverable
                    // onClic
                    
                    style={{ width: '100%' }}
                    cover={<img alt="example" src={item.img} className={styles.cardImg}/>}
                  >
                    <Card.Meta title={item.title} description={item.desc} />
                  </Card>,
            </Col>
              )
            }

          </Row>
        </Content>
      </Layout>

    </div>
  )
}

export default Artikel
