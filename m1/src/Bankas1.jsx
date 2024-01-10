import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import "./App.scss";
import "./buttons.scss";
import './form.scss';
import { useCallback, useEffect, useState } from 'react';
import { lsDestroy, lsRead, lsStore, lsUpdate} from './Components/Bankas1/lsManager';
import Create from './Components/Bankas1/Create';
import Read from './Components/Bankas1/Read';
import Delete from './Components/Bankas1/Delete';
import Messages from './Components/Bankas1/Message';
import Edit from './Components/Bankas1/Edit';

export default function App() {

  const KEY = 'accounts';
  const [newAccount, setNewAccount] = useState([]);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [destroyData, setDestroyData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [editData, setEditData] = useState(null);
  const [updateData, setUpdateData] = useState(null);

  const addMessage = useCallback((type, text) => {
    const id = uuidv4();
    setMessages(prevMessages => [{id, type, text}, ...prevMessages]);
    setTimeout(() => {
     setMessages(prevMessages => prevMessages.filter(m => m.id !== id));
    }, 3000);
   }, []);

  useEffect(() => {
    setNewAccount(lsRead(KEY));
  }, []);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    const id = lsStore(KEY, createData);
    setNewAccount(prevNewAccount => [...prevNewAccount, {...createData, id}]);
    addMessage('success', 'New account created successfully!');
  }, [createData, setNewAccount, addMessage]);

  useEffect(() => {
    if (null === destroyData) {
      return;
    }
    lsDestroy(KEY, destroyData.id);
    setNewAccount(prevNewAccount => prevNewAccount.filter(newAccount => newAccount.id !== destroyData.id));
    setDeleteData(null);
    addMessage('danger', 'Account deleted successfully!');
  }, [destroyData, setNewAccount, addMessage]);

  useEffect(() => {
    if (null === updateData) {
      return;
    }
    const id = updateData.id;
    lsUpdate(KEY, id, updateData);
    setNewAccount(prevNewAccount => prevNewAccount.map(newAccount => newAccount.id === id ? {...updateData, id:updateData.id} : newAccount));
    setEditData(null);
    addMessage('dark', 'Account edited successfully!')   
  }, [updateData, setNewAccount, addMessage])

    return (
      <>
      <div className="container mt-0.5 ">
      <div className="row">
        <div>
          <Read newAccount={newAccount} setDeleteData={setDeleteData} setEditData={setEditData} />
        </div>
        <div className="col-5 mt-5 ">
          <Create setCreateData={setCreateData}/>
        </div>
      </div>
    </div>
    <Delete deleteData={deleteData} setDeleteData={setDeleteData} setDestroyData={setDestroyData}/>
    <Messages messages={messages}/>
    <Edit newAccount={newAccount} editData={editData} setEditData={setEditData} setUpdateData={setUpdateData}/>
    </>
  );
};