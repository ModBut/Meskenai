export default function Squares({squares}) {
    return(
        <div className="square" 
        style={{
            backgroundColor: 'darkblue',
            border: 'none',
        }}>
            {squares}
        </div>
    )
}