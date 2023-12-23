export default function Red({redSquares}) {
    return(
        <div className="square" 
        style={{
            backgroundColor: 'red',
            border: 'none',
        }}>
            {redSquares}
        </div>
    )
}