import React, { useEffect, useState } from 'react';
import './App.scss';
import './table.scss';
import './form.scss';
import './buttons.scss';
import axios from 'axios';

const API_URL = 'http://localhost:3001/clients';
 
export default function App() {

    const [clients, setClienties] = useState([]);
    const [structured, setStructured] = useState([]);
    const [type, setTypes] = useState('');

    const restrcture = clients => {
        const structured = [];
        clients.forEach(client => {
            const index = structured.findIndex(c => c.id === client.id);
            if (index === -1) {
                structured.push({
                    id: client.id,
                    name: client.name,
                    phones: [{
                        pid: client.pid,
                        number: client.number,
                        client_id: client.client_id
                    }]
                });
            } else {
                structured[index].phones.push({
                    pid: client.pid,
                    number: client.number,
                    client_id: client.client_id
                });
            }
        });
        console.log(structured);
        return structured;
    }

    useEffect(() => {
        if (type === '') {
            setClienties([]);
            setStructured([]);
            return;
        }
        axios.get(API_URL + '/?type=' + type)
            .then(res => {
                setClienties(res.data);
                setStructured(restrcture(res.data));
            });
    }, [type, setClienties]);

    return (
        <div className='inside'>
            <h1>Clients</h1>
            <h2>by join type {type}</h2>
            <div className='forms'>
                <button className='green' onClick={() => setTypes('inner')}>Inner</button>
                <button className='green' onClick={() => setTypes('left')}>Left</button>   
                <button className='green' onClick={() => setTypes('right')}>Right</button>           
                <button className='red' onClick={() => setTypes('')}>Clear</button>
                </div>
            <table>
                <thead>
                    <tr>
                        <th>Client ID</th>
                        <th>Name</th>
                        <th>Phone ID</th>
                        <th>Number</th>
                        <th>Phone client_id</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client.id + '_' + client.pid}>
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td>{client.pid}</td>
                            <td>{client.number}</td>
                            <td>{client.client_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Structured Data</h2>
            <div className='structured'>
                {
                    structured.map(client => (
                        <div key={client.id} className='client'>
                            <h3>{client.name}</h3>
                            <div className='phones'>
                                {
                                    client.phones.map(phone => (
                                        <div key={phone.pid} className='phone'>
                                            <p>{phone.number}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            </div>
                    ))}
            </div>
        </div>
    );
}