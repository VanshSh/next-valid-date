import Invalid_Days from './Components/InvalidDays/InvalidDays'
import InvalidMonths from './Components/InvalidMonths/InvalidMonths'
import SameDayDelivery from './Components/SameDayDelivery/EnableSameDayDelivery'
import GlobalContextUse from './Store/ContextStore'
import { weekly_items } from './DATA_ITEMS/Weekly_Items'
import { monthly_items } from './DATA_ITEMS/Monthly_Items'

function App() {
    const {
        state: { invalidDays, invalidMonths },
    } = GlobalContextUse()
    return (
        <div>
            <SameDayDelivery />
            <Invalid_Days items_data={weekly_items} />
            <InvalidMonths items_data={monthly_items} />
        </div>
    )
}

export default App
