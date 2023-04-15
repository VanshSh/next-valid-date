import React from 'react'
import GlobalContextUse from '../../Store/ContextStore'
import { Dropdown, Space, Typography } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import ShowInvalidDays from '../ShowInvalidArr'

const InvalidDays = ({ items_data }) => {
    const items = items_data
    const {
        setState,
        state: { invalidMonths },
    } = GlobalContextUse()

    const onSelectHandler = (e) => {
        setState((prevState) => {
            return {
                ...prevState,
                invalidMonths: [...prevState.invalidMonths, e],
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
                        Select unavailabel Months
                        <DownOutlined />
                    </Space>
                </Typography.Link>
            </Dropdown>
            <ShowInvalidDays invalidDays={invalidMonths} items={items} />
        </div>
    )
}

export default InvalidDays
