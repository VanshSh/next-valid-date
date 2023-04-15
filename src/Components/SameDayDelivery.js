import React from 'react'
import { UseGlobalContext } from '../Store/Context'
import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
}

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
