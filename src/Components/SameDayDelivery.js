import React from 'react'
import { UseGlobalContext } from '../Store/Context'
import { Checkbox } from 'antd'

const SameDayDelivery = () => {
    const {
        state: { sameDayDelivery },
        setState,
    } = UseGlobalContext()
    return (
        <div className='bg-red-500'>
            <h1>Same Day Delivery {sameDayDelivery} </h1>
            <Checkbox>Checkbox</Checkbox>
            <div>CHECKBOX</div>
        </div>
    )
}

export default SameDayDelivery
