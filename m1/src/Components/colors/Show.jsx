export function Show({color, setDeleteData, setEditData}) {
    return (
        <div className="showLine">
        <div className='square' style={{
        color: color.color,
        backgroundColor: color.color,
        width: color.size / 2 + 'px',
        height: color.size / 2 + 'px'
        }}></div>
        <div className="color-names">{color.name}</div>
        <div className="buttons">
            <button className="red" onClick={() => setDeleteData(color)}>Delete</button>
            <button className="green" onClick={() => setEditData(color)}>Edit</button>
        </div>
        </div>
    );
}