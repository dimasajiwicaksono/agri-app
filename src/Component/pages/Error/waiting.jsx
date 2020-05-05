import React from 'react'
import waitingImg from '../../../Asset/image/waiting.svg'
import { Layout, Typography } from 'antd'
import globalStyles from '../global.module.css'

function WaitingPages() {
  const { Content } = Layout;
  const { Title } = Typography;
  return (
    <div>
      <Layout className={globalStyles.layoutBg}>
        <Content>
          <img src={waitingImg} alt='' style={{height: '60vh', width: '100%'}}/>
          <div style={{marginTop: '5vh'}}>
          <Title level={3} style={{textAlign:'center'}}>Sorry, Halaman ini masih tahap development</Title>
          </div>
         
        </Content>
      </Layout>
      
    </div>
  )
}

export default WaitingPages