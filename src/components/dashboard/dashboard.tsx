import {DashboardPanel} from './dashboardPanel/dashboardPanel';
import s from './styled.module.css'

type propsType = {
    keyboard: { name: string, callBack: () => void }[]
}

export const Dashboard = ({keyboard}: propsType) => {
    return (
        <div className={s.dashboard}>
            <DashboardPanel keyboard={keyboard}/>
        </div>
    );
};
