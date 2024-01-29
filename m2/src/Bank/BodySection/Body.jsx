import './Body.scss';
import Top from './TopSection/Top';
import Bottom from './BottomSection/Bottom';


export default function Body() {
    return (
        <div className='body'>
            <Top/>
            <Bottom/>
        </div>
    )
}