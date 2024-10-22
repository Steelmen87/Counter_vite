import {DashboardDisplay} from '../../display/dashboardDisplay';
import {Keyboard} from '../../keyboard/keyboard';
import s from './styled.module.css'

type propsType = {
    keyboard: { name: string, callBack: () => void }[]
}
export const DashboardPanel = ({keyboard}: propsType) => {
    return (
        <div className={s.dashboardPanel}>
            <DashboardDisplay/>
            <Keyboard keyboard={keyboard}/>
        </div>
    );
};
 