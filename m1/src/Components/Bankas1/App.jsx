import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import "./buttons.scss";
import './form.scss';
import Create from './Components/colors/Create';
import { useEffect, useState } from 'react';
import { lsDestroy, lsRead, lsStore, lsUpdate } from './Components/colors/lsManager';
import Read from './Components/colors/Read';
import Delete from './Components/colors/Delete';
import Edit from './Components/colors/Edit';


export default function App() {

  const KEY = 'colors';
  const [colors, setColor] = useState([]);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [destroyData, setDestroyData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [updateData, setUpdateData] = useState(null);


  useEffect(() => {
    setColor(lsRead(KEY));
  }, []);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    const id = lsStore(KEY, createData);
    setColor(prevColors => [...prevColors, {...createData, id}]);
  }, [createData]);

  useEffect(() => {
    if (null === destroyData) {
      return;
    }

    lsDestroy(KEY, destroyData.id);

    setColor(prevColors => prevColors.filter(color => color.id !== destroyData.id));
    setDeleteData(null);
  }, [destroyData]);

  useEffect(() => {
    if (null === updateData) {
      return;
    }

    lsUpdate(KEY, updateData.id, updateData);

    setColor(prevColors => prevColors.map(color => color.id === updateData.id ? {...updateData, id:updateData.id} : color));

    setEditData(null);
  }, [updateData])

    return (
      <>
      <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <Create setCreateData={setCreateData}/>
        </div>
        <div className="col-7">
          <Read colors={colors} setDeleteData={setDeleteData} setEditData={setEditData}/>
        </div>
      </div>
    </div>
    <Delete deleteData={deleteData} setDeleteData={setDeleteData} setDestroyData={setDestroyData}/>
    <Edit editData={editData} setEditData={setEditData} setUpdateData={setUpdateData}/>
    </>
  );
};