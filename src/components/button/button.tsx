import s from './styled.module.css'
type Props = {
    name:string
    callBack:()=>void
    disabled:boolean
}
export const Button = ({callBack,name,disabled}:Props) => {
    return (
        <div>
            <button
                disabled={disabled}
                className={s.btn}
                onClick={()=>callBack()}
            >{name}</button>
        </div>
    );
};
