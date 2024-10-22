import s from './styled.module.css'
type Props={
    children: React.ReactNode
}
export const DashboardDisplay = ({children}:Props) => {
    return (
        <div className={s.dashboardDisplay}>
            {children}
        </div>
    );
};
