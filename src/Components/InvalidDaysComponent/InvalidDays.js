import React from 'react'
import GlobalContextUse from '../../Store/ContextStore'
import { Dropdown, Space, Typography } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import ShowInvalidDays from './ShowInvalidDays'

const items = [
    {
        key: '0',
        label: 'Sunday',
    },
    {
        key: '1',
        label: 'Monday',
    },
    {
        key: '2',
        label: 'Tuseday',
    },
    {
        key: '3',
        label: 'Wednesday',
    },
    {
        key: '4',
        label: 'Thursday',
    },
    {
        key: '5',
        label: 'Friday',
    },
    {
        key: '6',
        label: 'Saturday',
    },
]
const InvalidDays = () => {
    const {
        state: { invalidDays },
        setState,
    } = GlobalContextUse()
    const onSelectHandler = (e) => {
        setState((prevState) => {
            return {
                ...prevState,
                invalidDays: [...prevState.invalidDays, e],
            }
        })
    }

    return (
        <div className='bg-red-200'>
            <Dropdown
                menu={{
                    onClick: onSelectHandler,
                    items,
                    selectable: true,
                    multiple: true,
                }}
            >
                <Typography.Link>
                    <Space className='  '>
                        Select unavailabel Days
                        <DownOutlined />
                    </Space>
                </Typography.Link>
            </Dropdown>
            <ShowInvalidDays invalidDays={invalidDays} items={items} />
        </div>
    )
}

export default InvalidDays
