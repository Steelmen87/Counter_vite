import s from './styled.module.css'

type Props = {
    value: number
    maxValue: number
    startValue: number
    message: string | boolean
}
export const DivDisplay = ({value, maxValue, message, startValue}: Props) => {
    let error = maxValue === value || value < 0 || maxValue <= startValue
    return (
        <div className={`${s.divDisplay} ${error ? s.error : ''}`}>
            {message ? message : value}
        </div>
    );
};
