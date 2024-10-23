import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Dashboard} from './components/dashboard/dashboard'
import s from './styled.module.css'
import {Input} from './components/input/input'
import {DivDisplay} from './components/divDisplay/divDisplay'
import {useEffect, useState} from 'react'

type keyboardArrayType = {
    keyboard: {
        name: string
        callBack: () => void
        disabled: boolean
    }[]
}

function App() {
    const [value, setValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [message, setMessage] = useState<string | boolean>('enter values and press "set"')
    const inputDisabled = maxValue === startValue || startValue < 0
    const resetCallBack = () => {
        setValue(startValue)
    }
    const incCallBack = () => {
        setValue((value) => value + 1)
    }
    const setCallBack = () => {
        setValue(startValue)
        setMessage(false)
    }

    const keyboardArray: keyboardArrayType = {
        keyboard: [
            {
                callBack: setCallBack
                , name: 'Set', disabled: maxValue <= startValue
            },
        ]
    }

    let incDisableValue = maxValue <= startValue ||
        value + 1 > maxValue ||
        message === 'enter values and press "set"' ||
        message === 'Incorrect value'
    let resetDisableValue = value === startValue || message === 'enter values and press "set"' ||
        message === 'Incorrect value'
    const key: keyboardArrayType = {
        keyboard: [
            {
                callBack: incCallBack,
                name: 'inc',
                disabled: incDisableValue
            },
            {
                callBack: resetCallBack,
                name: 'reset',
                disabled: resetDisableValue
            }
        ]
    }

    useEffect(() => {
        maxValue <= startValue || startValue < 0
            ? setMessage('Incorrect value')
            : maxValue > startValue || startValue > 0
                ? setMessage('enter values and press "set"')
                : setMessage(false)
    }, [startValue, maxValue]);
    useEffect(() => {
        setMessage('enter values and press "set"')
    }, []);
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
            </div>
            <div className={s.panel}>
                <Dashboard keyboard={keyboardArray.keyboard}>
                    <Input
                        value={maxValue}
                        name={'max value'}
                        onChange={(e) => setMaxValue(Number(e))}
                        disabled={inputDisabled}
                    />
                    <Input
                        value={startValue}
                        name={'start value'}
                        onChange={(e) => setStartValue(Number(e))}
                        disabled={inputDisabled}
                    />
                </Dashboard>
                <Dashboard
                    keyboard={key.keyboard}
                    children={<DivDisplay value={value}
                                          maxValue={maxValue}
                                          message={message}
                                          startValue={startValue}
                    />}/>
            </div>
        </>
    )
}

export default App
