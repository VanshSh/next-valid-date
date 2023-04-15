import React from 'react'
const ShowInvalidDays = ({ invalidDays, items }) => {
    const invalidDaysArray = invalidDays.map(({ key }) => {
        if (invalidDays.includes(key)) {
            console.log('YES')
        } else {
            console.log('NO')
        }

        return key
    })
    const invaliDays = invalidDaysArray.map((key) => {
        return items[key].label
    })

    return <div>{invaliDays}</div>
}

export default ShowInvalidDays
