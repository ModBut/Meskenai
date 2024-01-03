import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import "./buttons.scss";
import './form.scss';
import Create from './Components/colors/Create';
import { useCallback, useEffect, useState } from 'react';
import { lsDestroy, lsRead, lsStore, lsUpdate } from './Components/colors/lsManager';
import Read from './Components/colors/Read';
import Delete from './Components/colors/Delete';
import Edit from './Components/colors/Edit';
import Messages from './Components/colors/Messages';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


export default function App() {

  const KEY = 'colors';
  const [colors, setColor] = useState([]);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [destroyData, setDestroyData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [updateData, setUpdateData] = useState(null);
  const [messages, setMessages] = useState([]);

  const addMessage = useCallback((type, text) => {
    const id = uuidv4();
    setMessages(prevMessages => [{id, type, text}, ...prevMessages]);
    setTimeout(() => {
     setMessages(prevMessages => prevMessages.filter(m => m.id !== id));
    }, 3000);
   }, []);


  useEffect(() => {
    setColor(lsRead(KEY));
  }, []);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    const id = lsStore(KEY, createData);
    setColor(prevColors => [...prevColors, {...createData, id}]);
    addMessage('dark', 'Color created successfully!');

    const color = createData.color.replace('#', '')
    axios.get(`https://www.thecolorapi.com/id?hex=${color}`)
        .then(res => {
          const name = res.data.name.value;
          const newData = {...createData, id, name};
          lsUpdate(KEY, id, newData);
          setColor(prevColors => prevColors.map(color => color.id === id ? newData : color))
          addMessage('dark', 'Color name updated from API');
        })
        .catch(() => {
          console.log('error');
        })

  }, [createData, setColor, addMessage]);

  useEffect(() => {
    if (null === destroyData) {
      return;
    }
    lsDestroy(KEY, destroyData.id);
    setColor(prevColors => prevColors.filter(color => color.id !== destroyData.id));
    setDeleteData(null);
    addMessage('danger', 'Color deleted successfully!');
  }, [destroyData, setColor, addMessage]);

  useEffect(() => {
    if (null === updateData) {
      return;
    }
    const id = updateData.id;
    lsUpdate(KEY, id, updateData);
    setColor(prevColors => prevColors.map(color => color.id === id ? {...updateData, id:updateData.id} : color));
    setEditData(null);
    addMessage('dark', 'Color update successfully!')
    const color = updateData.color.replace('#', '')
    axios.get(`https://www.thecolorapi.com/id?hex=${color}`)
        .then(res => {
          const name = res.data.name.value;
          const newData = {...updateData, id, name};
          lsUpdate(KEY, id, newData);
          setColor(prevColors => prevColors.map(color => color.id === id ? newData : color))
          addMessage('dark', 'Color name updated from API');
        })
        .catch(() => {
          console.log('error');
        })
  }, [updateData, setColor, addMessage])

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
    <Messages messages={messages}/>
    </>
  );
};