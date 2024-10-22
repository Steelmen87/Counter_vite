import {Button} from '../button/button'
import s from './styled.module.css'

type Props = {
    keyboard: { name: string, callBack: () => void }[]
}
export const Keyboard = ({keyboard}: Props) => {
    return (
        <div className={s.keyboard}>
            {keyboard.map(el =>
                <Button name={el.name} callBack={el.callBack}/>
            )}
        </div>
    );
};
