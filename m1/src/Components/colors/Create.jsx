import { useState } from "react";

export default function Create({setCreateData}) {

    const [color, setColor] = useState('#000000');
    const [size, setSize] = useState(100);

    const handleSubmit = () => {
        setCreateData({color, size});
        setColor('#000000');
        setSize(100);
    }

    return (
    <div className="card">
       <div className="card-header">
          <h2>Create New Color</h2>
        </div>
        <div className="card-body">
           <div className="mb-3">
            <label className="form-label">Color Code</label>
            <input type='color'className="form-control form-control-color" value={color} onChange={e => setColor(e.target.value)}/>
           </div>
            <div className="mb-3">
             <label className="form-label">Square size: {size} px</label>
             <input type="range" className="form-range" min='100' max='300' value={size} onChange={e => setSize(e.target.value)}/>
            </div>
            <div className="mb-3">
             <button className="blue" onClick={handleSubmit}>Add New Color</button>
            </div>
       </div>
    </div>
    );
}