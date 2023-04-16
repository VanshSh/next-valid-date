import React from 'react'
import { InputNumber } from 'antd'
import GlobalContextUse from '../Store/ContextStore'

export const DisableLast_N_Days = () => {
    const {
        state: { last_n_days_disable },
        setState,
    } = GlobalContextUse()
    const onChange = (value) => {
        setState((prevState) => ({
            ...prevState,
            last_n_days_disable: value,
        }))
    }

    return (
        <div>
            <p>Disable Last "n" days of every month. (max=10 days)</p>
            <InputNumber
                min={1}
                max={10}
                defaultValue={2}
                onChange={onChange}
            />
            {last_n_days_disable && (
                <p>
                    You have disabled last {last_n_days_disable} days of every
                    month.
                </p>
            )}
        </div>
    )
}
