import React from 'react';
import { Layout, Skeleton, Row, Col } from 'antd'

function SkeletonContent() {
  const { Content } = Layout

  return (
    <div>
      <Layout style={{ backgroundColor: 'white' }}>
            <Content style={{ height: '80vh' }}>
              <Skeleton active />
              <Row  gutter={12}>
                <Col md={10} xs={24} >
                    <Skeleton active /> 
                </Col>
                <Col md={14} xs={24} >
                    <Skeleton active />
                    <Skeleton active />
                </Col>
              </Row>
            </Content>
          </Layout>
          
    </div>
  )
}

export default SkeletonContent
