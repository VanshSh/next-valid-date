import React from 'react'
import { DatePicker } from 'antd'
import GlobalContextUse from '../../Store/ContextStore'
import { DeleteOutlined } from '@ant-design/icons'

const InvalidDates = () => {
    const {
        state: { invalidDates },
        setState,
    } = GlobalContextUse()
    const onChangeHandler = (e) => {
        const date = new Date(e?.$d)
        if (e?.$d == null) {
            return
        } else {
            const formattedDate = date
                .toISOString({
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                })
                .slice(0, 10)
                .split('/')
                .reverse()
                .join('-')

            if (invalidDates.includes(formattedDate)) {
                return
            } else {
                setState((prevState) => {
                    return {
                        ...prevState,
                        invalidDates: [
                            formattedDate,
                            ...prevState.invalidDates,
                        ],
                    }
                })
            }
        }
    }
    const deleteDateHandler = (date) => {
        setState((prevState) => {
            const invalidDates = [...prevState.invalidDates]
            const index = invalidDates.indexOf(date)
            if (index > -1) {
                invalidDates.splice(index, 1)
            }
            return {
                ...prevState,
                invalidDates: invalidDates,
            }
        })
    }
    console.log(invalidDates)
    const showInvalidDates = invalidDates.map((date) => {
        if (date === '1970-01-01') {
            return null
        } else {
            return (
                <span key={date} class='mx-1 flex items-center '>
                    {date}
                    <span
                        className='mx-1 cursor-pointer '
                        onClick={() => deleteDateHandler(date)}
                    >
                        <DeleteOutlined />
                    </span>
                </span>
            )
        }
    })

    return (
        <div>
            <p>Select unavailabel Dates</p>
            <DatePicker onChange={onChangeHandler} />
            <div className='flex gap-2 flex-wrap'>{showInvalidDates}</div>
        </div>
    )
}

export default InvalidDates
