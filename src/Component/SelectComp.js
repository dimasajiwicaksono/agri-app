import React from 'react'
import { Select } from 'antd';

function SelectComp({datas}) {
    console.log(datas)
    const { Option } = Select;
    const handleChange = e => {
        console.log(e)
    }
    const optData = [];

    if(datas !== undefined ) {
       datas.map(val => 
        optData.push({
            title: val.title,
            value: val.value,
        }))
    }

    return (
        <div>
            <Select 
                placeholder='Silakan pilih Komoditas'
                showSearch
                allowClear
                onChange={handleChange}
                filterOption={(input, opt) => 
                opt.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                {
                    optData.map(val => (
                        <Option key={val.value} value ={val.value}>
                            {val.title}
                        </Option>
                    ))
                }
            </Select>
        </div>
    )
}

export default SelectComp
