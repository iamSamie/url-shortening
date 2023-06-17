import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { FirstWindow } from './components/FirstWindow'
import { SecondWindow } from './components/SecondWindow'
import { ContextFunction } from './context'

function App() {
    return (
        <>
            <ContextFunction>
                <Header />
                <FirstWindow />
                <SecondWindow />
                <Footer />
            </ContextFunction>
        </>
    )
}

export default App
