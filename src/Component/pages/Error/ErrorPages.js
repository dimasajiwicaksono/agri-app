import React from 'react'
import { /*Skeleton,*/ Result } from 'antd'

function ErrorPages() {
    return (
        <div >
            <Result 
                status ='404'
                title ='404'
                subTitle='Sorry, the page coming soon'
            />
        </div>
    )
}

export default ErrorPages;
