import React, { useState } from 'react'
import { Modal, Row, Col, Input, Button, Space, Table , Tag} from 'antd'
import { settings } from '../../Utils/settings';

function ModalItem({visible, onOk, onCancel}) {

  const columns = [
    {
      title: 'Nama',
      dataIndex: 'name',
      key: 'name',
      width: 100
    },
    {
      title: 'Nama Latin',
      dataIndex: 'namaLtn',
      key: 'namaLtn',
      width: 200
    },
    {
      title: 'Ket',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map((tag, index) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'semusim') {
              color = 'volcano';
            }
            if (tag === 'tahunan') {
              color = 'success';
            }
            return (
              <Tag color={color} key={index}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
  ];

 
  const data = [
    {
      code: '1001',
      name: 'Padi',
      namaLtn: 'Oryza sativa',
      tags: ['semusim', 'pangan'],
    },
    {
      code: '1002',
      name: 'Kacang',
      namaLtn: 'Arachis hypogaea',
      tags: ['semusim', 'pangan'],
    },
    {
      code: '1003',
      name: 'Kedelai',
      namaLtn: 'Glycine max',
      tags: ['semusim', 'pangan'],
    },
    {
      code: '1002',
      name: 'Akasia',
      namaLtn: 'Acacia sp.',
      tags: ['tahunan', 'industri'],
    },
  ];

  const [name, setName ] = useState('');
  const handleReset=() => {
    setName('')
  }



  return (
    
    <div>
      <Modal
        maskClosable={false}
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        width={settings.isMobileView() ? 400 : 600}
        title='Select Item'
      >
        <Row gutter={20}>
          <Col span={12}>
            {/* <Form>
              <Form.Item label='Nama'> */}
                <Input placeholder='Nama' value ={name} onChange={ e => setName(e.target.value)}/>
              {/* </Form.Item>
            </Form> */}
          </Col>
          <Col span={12}>
            <Space>
              <Button type='primary'> Search</Button>
              <Button onClick={handleReset}> Reset</Button>
            </Space>
          </Col>
        </Row>
        <Row style={{marginTop:'5vh'}}>
          <Table
            bordered={true}
            columns={columns}
            dataSource={data}
          />
        </Row>
      </Modal>
    </div>
  )
}




export default ModalItem
