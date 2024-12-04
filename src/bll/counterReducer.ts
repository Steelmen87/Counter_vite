type stateType = {
    count: number
    message: string
    maxValue: number
    startValue: number
}
const initialState: stateType = {
    count: 0,
    message: 'enter values and press "set"',
    maxValue: 0,
    startValue: 0
}
export const counterReducer = (state: stateType = initialState, action: ActionType): stateType => {
    switch (action.type) {
        case 'SET-COUNT': {
            return {
                ...state,
                count: action.payload.count
            }
        }
        case "SET-MESSAGE": {
            return {
                ...state,
                message: action.payload.message
            }
        }
        case "SET-MAX": {
            return {
                ...state,
                maxValue: action.payload.maxValue
            }
        }
        case "SET-START": {
            return {
                ...state,
                startValue: action.payload.startValue
            }
        }
        default: {
            return state
        }
    }
};

export const setCountAC = (payload: { count: number }) => {
    return {type: 'SET-COUNT', payload} as const
}
export const setMessageAC = (payload: { message: string }) => {
    return {type: 'SET-MESSAGE', payload} as const
}
export const setMaxValueAC = (payload: { maxValue: number }) => {
    return {type: 'SET-MAX', payload} as const
}
export const setStartValueAC = (payload: { startValue: number }) => {
    return {type: 'SET-START', payload} as const
}

type setCountACType = ReturnType<typeof setCountAC>
type setMessageACType = ReturnType<typeof setMessageAC>
type setMaxValueACType = ReturnType<typeof setMaxValueAC>
type setStartValueACType = ReturnType<typeof setStartValueAC>

type ActionType = setCountACType | setMessageACType | setMaxValueACType | setStartValueACType