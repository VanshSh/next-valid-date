import React from 'react'
import { TimePicker } from 'antd'
import GlobalContextUse from '../../Store/ContextStore'

const CutOffDeliveryTime = () => {
    const {
        state: {
            sameDayDelivery: { cutOffTime },
        },
        setState,
    } = GlobalContextUse()

    const onChangeHandler = (timeString) => {
        setState((prevState) => {
            return {
                ...prevState,
                sameDayDelivery: {
                    ...prevState.sameDayDelivery,
                    cutOffTime: timeString,
                },
            }
        })
    }

    return (
        <div>
            <TimePicker
                placeholder='Select cutoff time'
                onChange={onChangeHandler}
                minuteStep={15}
                secondStep={10}
                hourStep={1}
            />
        </div>
    )
}

export default CutOffDeliveryTime
