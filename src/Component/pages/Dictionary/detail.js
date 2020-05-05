import React from 'react'
import { Card, Collapse } from 'antd';
import { dataHama } from '../../Data/Data';
import styles from './styles.module.css'

function DetailLayout({dataDetail}) {
  const { Meta } = Card;
  const { Panel } = Collapse;
  const hama = dataHama[0];
  const data = dataDetail[0];

  return (
    <div style={{marginLeft: '1em', marginRight:'1em', textAlign:'center'}}>
      <h2>{data.name} <em>{data.pyb}</em></h2>
        <Card
            // hoverable
            className={styles.DetailCard}
            cover={
              <img alt='example' src={hama.img}/>
            }  
          >
          <Meta title={data.name}/>
        </Card>
      <div>
        <Collapse>
          <Panel header='Penyebab'>
            {/* <p>{data.pyb}</p> */}
            <p>{data._id}</p>
          </Panel>
          <Panel header='Gejala'>
            {/* <p>{data.gjl}</p> */}
            <p>{data.name}</p>
          </Panel>
          <Panel header='Deskripsi'>
            {/* <p>{data.desc}</p> */}
            <p>{data.age}</p>
          </Panel>
          <Panel header='Pengendalian'>
            {/* <p>{data.pgndl}</p> */}
            <p>{data.name}</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}

export default DetailLayout
