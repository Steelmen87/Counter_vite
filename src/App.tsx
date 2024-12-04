import viteLogo from '/vite.svg'
import './App.css'
import {Dashboard} from './components/dashboard/dashboard'
import s from './styled.module.css'
import {Input} from './components/input/input'
import {DivDisplay} from './components/divDisplay/divDisplay'
import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {appDispatchType, RootState} from "./bll/store.ts";
import {setCountAC, setMaxValueAC, setMessageAC, setStartValueAC} from "./bll/counterReducer.ts";

type keyboardArrayType = {
    keyboard: {
        name: string
        callBack: () => void
        disabled: boolean
    }[]
}

function App() {

    const value = useSelector<RootState, number>((state: RootState) => state.counter.count)
    const message = useSelector<RootState, string>((state: RootState) => state.counter.message)
    const maxValue = useSelector<RootState, number>((state: RootState) => state.counter.maxValue)
    const startValue = useSelector<RootState, number>((state: RootState) => state.counter.startValue)

    const dispatch = useDispatch<appDispatchType>()

    const inputDisabled = maxValue === startValue || startValue < 0
    const resetCallBack = () => {
        dispatch(setCountAC({count: startValue}))
    }
    const incCallBack = () => {
        dispatch(setCountAC({count: value + 1}))
    }
    const setCallBack = () => {
        dispatch(setCountAC({count: startValue}))
        dispatch(setMessageAC({message: ''}))

        localStorage.setItem('counter-value', JSON.stringify({startValue: startValue, maxValue: maxValue}))
    }

    const keyboardArray: keyboardArrayType = {
        keyboard: [
            {
                callBack: setCallBack,
                name: 'Set',
                disabled: maxValue <= startValue
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

    /*useEffect(() => {
        let localStorageVal = JSON.parse(localStorage.getItem('counter-value'))
        if (localStorageVal) {
            dispatch(setMaxValueAC({maxValue: localStorageVal.maxValue}))
            dispatch(setStartValueAC({startValue: localStorageVal.startValue}))
        }
    }, []);*/
/*
    useEffect(() => {
        dispatch(setMessageAC({message: 'enter values and press "set"'}))
    }, []);*/

    useEffect(() => {
        maxValue <= startValue || startValue < 0
            ? dispatch(setMessageAC({message: 'Incorrect value'}))
            : maxValue > startValue || startValue > 0
                ? dispatch(setMessageAC({message: 'enter values and press "set"'}))
                : dispatch(setMessageAC({message: ''}))
    }, [startValue, maxValue]);


        /*useEffect(() => {
            setTimeout(()=>{
                localStorage.setItem('counter-value', JSON.stringify({startValue: startValue, maxValue: maxValue}))
            },1000)
        },[startValue,maxValue])*/
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
                        onChange={(e) => dispatch(setMaxValueAC({maxValue: Number(e)}))}
                        disabled={inputDisabled}
                    />
                    <Input
                        value={startValue}
                        name={'start value'}
                        onChange={(e) => dispatch(setStartValueAC({startValue: Number(e)}))}
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
