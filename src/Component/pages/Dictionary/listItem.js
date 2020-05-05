import React from 'react'
import { List, Button } from 'antd';
import styles from './styles.module.css'

function ListItem({handleDetail, data}) {

  return (
    <div className={styles.ListItem}>
      <List
        itemLayout='horizontal'
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<Button type='link' 
              style={{ paddingLeft: 0 }} 
              onClick={()=>handleDetail(item)}>{item.name}</Button>}
              description={item.pyb}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default ListItem
