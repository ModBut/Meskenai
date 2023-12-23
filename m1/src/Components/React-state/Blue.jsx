export default function Blue({blueSquares}) {
    return(
        <div className="square" 
        style={{
            backgroundColor: 'blue',
            border: 'none',
        }}>
            {blueSquares}
        </div>
    )
}