import {DashboardDisplay} from '../../display/dashboardDisplay';
import {Keyboard} from '../../keyboard/keyboard';
import s from './styled.module.css'

type propsType = {
    keyboard: { name: string, callBack: () => void }[]
    children: React.ReactNode
}
export const DashboardPanel = ({keyboard,children}: propsType) => {
    return (
        <div className={s.dashboardPanel}>
            <DashboardDisplay children={children}/>
            <Keyboard keyboard={keyboard} />
        </div>
    );
};
 