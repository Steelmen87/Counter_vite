import s from './styled.module.css'

type Props = {
    name: string
    value: number
    onChange: (value: string) => void
}
export const Input = ({name, value, onChange}: Props) => {
    return (
        <div className={s.textValue}>
            <div>{name}</div>
            <input
                value={value}
                type={'number'}
                onChange={(event) => onChange(event.currentTarget.value)}/>
        </div>
    );
};
