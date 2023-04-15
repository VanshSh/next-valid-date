import React from 'react'
import { Checkbox } from 'antd'
import GlobalContextUse from '../../Store/ContextStore'
import CutOffDeliveryTime from './CutOffDeliveryTime'

const SameDayDelivery = () => {
    const {
        state: {
            sameDayDelivery: { enable },
        },
        setState,
    } = GlobalContextUse()

    const onChangeHandler = (e) => {
        setState((prevState) => {
            return {
                ...prevState,
                sameDayDelivery: {
                    ...prevState.sameDayDelivery,
                    enable: !prevState.sameDayDelivery.enable,
                },
            }
        })
    }

    return (
        <div className='bg-red-500'>
            <h1>Same Day Delivery </h1>
            <Checkbox checked={enable} onChange={onChangeHandler}>
                Enable Same day delivery
            </Checkbox>
            {enable && <CutOffDeliveryTime />}
        </div>
    )
}

export default SameDayDelivery
