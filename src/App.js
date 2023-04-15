import InvalidDays from './Components/InvalidDaysComponent/InvalidDays'
import SameDayDelivery from './Components/SameDayDelivery/EnableSameDayDelivery'
import { ContextProvider } from './Store/ContextStore'
function App() {
    return (
        <ContextProvider>
            <SameDayDelivery />
            <InvalidDays />
        </ContextProvider>
    )
}

export default App
