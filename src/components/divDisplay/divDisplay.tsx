import s from './styled.module.css'
type Props = {
    value:number
}
export const DivDisplay = ({value}:Props) => {
    const error = ''
    return (
        <div className={`${s.divDisplay} ${error && s.error}`}>
            {value}
        </div>
    );
};
