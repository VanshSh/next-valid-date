import Invalid_Days from './Components/InvalidDays/InvalidDays'
import InvalidMonths from './Components/InvalidMonths/InvalidMonths'
import SameDayDelivery from './Components/SameDayDelivery/EnableSameDayDelivery'
import { InputNumber } from 'antd'

import { weekly_items } from './DATA_ITEMS/Weekly_Items'
import { monthly_items } from './DATA_ITEMS/Monthly_Items'
import InvalidDates from './Components/InvalidDates/InvalidDates'
import { DisableLast_N_Days } from './Components/DisableLast_N_Days'

function App() {
    return (
        <div>
            <SameDayDelivery />
            <DisableLast_N_Days />
            <Invalid_Days items_data={weekly_items} />
            <InvalidMonths items_data={monthly_items} />
            <InvalidDates />
        </div>
    )
}

export default App
