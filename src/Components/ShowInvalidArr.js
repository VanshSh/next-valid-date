import React from 'react'
const ShowInvalidDays = ({ invalidDays, items }) => {
    let invalidDaysArray = []
    invalidDays.map(({ key }) => {
        if (invalidDaysArray.includes(key)) {
            let index = invalidDaysArray.indexOf(key)
            invalidDaysArray.splice(index, 1)
        } else {
            invalidDaysArray.push(key)
        }
    })
    const invaliDays = invalidDaysArray.map((key) => {
        return items[key].label
    })

    return <div>{invaliDays}</div>
}

export default ShowInvalidDays
