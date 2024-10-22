import s from './styled.module.css'
type Props = {
    name:string
    callBack:()=>void
}
export const Button = ({callBack,name}:Props) => {
    return (
        <div>
            <button className={s.btn} onClick={()=>callBack()}>{name}</button>
        </div>
    );
};
