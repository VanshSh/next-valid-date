import SameDayDelivery from './Components/SameDayDelivery'

import { ContextProvider } from './Store/Context'
function App() {
    return (
        <ContextProvider>
            <SameDayDelivery />
        </ContextProvider>
    )
}

export default App
