import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Dashboard} from './components/dashboard/dashboard'
import s from './styled.module.css'

type keyboardArrayType = {
    keyboard: { name: string, callBack: () => void }[]
}

function App() {
    const keyboardArray: keyboardArrayType = {
        keyboard: [
            {
                callBack: () => {
                }, name: 'Ok'
            },
            {
                callBack: () => {
                }, name: 'Cancel'
            },
            {
                callBack: () => {
                }, name: 'Set'
            },
        ]
    }
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <div className={s.panel}>
                <Dashboard keyboard={keyboardArray.keyboard}/>
            </div>
        </>
    )
}

export default App
