import './Bank.scss';
import Account from './Bank/AccountSection/Account';
import Body from './Bank/BodySection/Body';
import SideBar from './Bank/SideBarSection/SideBar';

export default function App() {

    return (
        <div className='container'>

            <SideBar/>
            <Body/>
            <Account/>

        </div>
    )
}