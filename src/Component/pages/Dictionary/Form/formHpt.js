import React, { useState , useEffect, useContext } from 'react'
import { Input, Form, Row, Col, Button, Checkbox, Space, Spin } from 'antd';
import styles from '../styles.module.css';
import { dataKomoditas } from '../../../Data/Data'
import SelectComp from '../../../SelectComp';
import ModalItem from '../modalItem';
import ListItem from '../listItem';
import { GET_API_COMMODITIES } from '../../../../ContextAPI/Dictionary/stores'
import { DictionariesContext } from '../../../../ContextAPI/Dictionary/contexts';
import { SET_DATA_COMMODITIES } from '../../../../ContextAPI/Dictionary/actions';

function FormHpt({handleDetail}) {
  const { Item } = Form
  const { dictionaries, dispatch } = useContext(DictionariesContext)
  const [ visible , setVisible ] = useState(false)
  const [ loading] = useState(false);
  const [ data, setData ] = useState([]);
  const optKomo = [];
  const optionsCheck = ['Hama', 'Penyakit']
  const layout = {
    labelCol: { span: 8},
    wrapperCol: { span: 16 },
    col: {span: 24}
  };

  const handleOk=() => {
    setVisible(!visible)
  }

  const handleCancel=() => {
    setVisible(!visible)
  }


const handleSearch = async () => {
  try {
    GET_API_COMMODITIES()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  } catch(err) {
    console.log(err)
  }
}

const handleReset =() => {
  setData([]);
}

useEffect(() => {
  GET_API_COMMODITIES()
    .then(res => {
      const { data } = res.data;
      dispatch({
        type: SET_DATA_COMMODITIES,
        payload: {
          data: data,
          isLoading: false,
        }
      })
    })
    .catch(err => console.log(err))
}, [dispatch])

if(dictionaries.data.length ) {
  dictionaries.data.map(val => 
    optKomo.push({
      title: val.comoName,
      value: val.comoCode,
    })
    )
}
  return (
    <div className={styles.DetailFormBody}>
      <Form {...layout}>
        <Row>
          <Col {...layout.col}>
            <Item label='Komoditas'>
              <SelectComp 
                datas ={optKomo}
                value={dataKomoditas.comoCode}
                />
            </Item>
          </Col>
        </Row>
        <Row>
          <Col {...layout.col} >
            <Item label='Tanaman'>
              <Row>
                <Col span={16}><Input /></Col>
                <Col span={8}>
                  <Button type='primary' onClick={() => setVisible(!visible)}>Search</Button>
                </Col>
              </Row>
            </Item>
          </Col>
        </Row>
        <Row>
          <Col {...layout.col}>
            <Item label='Jenis OPT'>
              <Checkbox.Group
                options={optionsCheck}
              />
            </Item>
          </Col>
        </Row>
        <div style={{textAlign:'center'}}>
          <Space>
            <Button type='primary' onClick={handleSearch}> Search</Button>
            <Button onClick={handleReset}>Reset</Button>
          </Space>
        </div>
      </Form>
      {
        visible && (
          <ModalItem 
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}/>
        )
      }
      <div>
        <Spin spinning={loading}>
            <ListItem 
            handleDetail={handleDetail}
            data={data}/>
        </Spin>
      </div>
    </div>
  )
}

export default FormHpt
