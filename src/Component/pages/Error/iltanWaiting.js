import React from 'react'
import waitingImg from '../../../Asset/image/iltan.svg'
import { Layout, Typography } from 'antd'
import globalStyles from '../global.module.css'
import errorStyles from './error.module.css'
import { settings } from '../../Utils/settings';

function IltanWaitingPages() {
  const { Content } = Layout;
  const { Title } = Typography;
  return (
    <div>
         <Layout className={settings.isMobileView() ?errorStyles.mobileLayout : globalStyles.layoutBg }>
        <Content>
          <img src={waitingImg} alt='' style={{height: '35vh', width: '100%'}}/>
          <div >
          <Title level={4} style={{textAlign:'center', marginBottom: '5vh'}}>Sorry, Halaman ini masih tahap development</Title>
          </div>
        </Content>
      </Layout>
      
    </div>
  )
}

export default IltanWaitingPages