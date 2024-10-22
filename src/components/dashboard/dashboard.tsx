import {DashboardPanel} from './dashboardPanel/dashboardPanel';
import s from './styled.module.css'

type propsType = {
    keyboard: { name: string, callBack: () => void }[]
    children: React.ReactNode
}

export const Dashboard = ({keyboard,children}: propsType) => {
    return (
        <div className={s.dashboard}>
            <DashboardPanel keyboard={keyboard} children={children}/>
        </div>
    );
};
