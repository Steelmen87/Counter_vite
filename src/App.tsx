import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Dashboard} from './components/dashboard/dashboard'
import s from './styled.module.css'
import {Input} from './components/input/input'
import {DivDisplay} from './components/divDisplay/divDisplay'
import {useState} from 'react'

type keyboardArrayType = {
    keyboard: { name: string, callBack: () => void }[]
}

function App() {
    const [value, setValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const keyboardArray: keyboardArrayType = {
        keyboard: [
            {
                callBack: () => {
                }, name: 'Set'
            },
        ]
    }
    const key: keyboardArrayType = {
        keyboard: [
            {
                callBack: () => {
                }, name: 'inc'
            },
            {
                callBack: () => {
                }, name: 'reset'
            }
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
                <Dashboard keyboard={keyboardArray.keyboard}>
                    <Input value={maxValue} name={'max value'} onChange={(e) => setMaxValue(Number(e))}/>
                    <Input value={startValue} name={'start value'} onChange={(e) => setStartValue(Number(e))}/>
                </Dashboard>
                <Dashboard keyboard={key.keyboard} children={<DivDisplay value={value}/>}/>
            </div>
        </>
    )
}

export default App
