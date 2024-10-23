import s from './styled.module.css'

type Props = {
    name: string
    value: number
    disabled: boolean
    onChange: (value: string) => void
}
export const Input = ({name, value, onChange, disabled}: Props) => {
    return (
        <div className={s.textValue}>
            <div>{name}</div>
            <input
                className={`${disabled ? s.disabled : ""}`}
                value={value}
                type={'number'}
                onChange={(event) => onChange(event.currentTarget.value)}/>
        </div>
    );
};
