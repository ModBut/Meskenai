import { useContext, useState, useEffect } from "react";
import TopNav from "../TopNav/TopNav";
import { Fruits } from "../../Contexts/Fruits";
import { Router } from '../../Contexts/Router';

export default function Delete() {

    const [fruit, setFruit] = useState(null);
    const { setDeleteFruit, setFruits, fruits } = useContext(Fruits);
    const {params} = useContext(Router);

    useEffect(_ => {
        if (null === fruits) {
            return;
        }
        const fruit = fruits.find(fruit => fruit.id === +params[1]);
        if (!fruit) {
            setFruit(null);
        } else {
            setFruit(fruit);
        }
    }, [fruits, params[1]]);


    const doDelete = _ => {
        const fruitid = fruit.id;
        setFruits(f => f.map(fruit => fruit.id === fruitid ? {...fruit, temp: true} : fruit));
        setDeleteFruit(fruitid);
        window.location.href = '#fruits';
    }

    if (!fruits)
    return (
        <div>
            <TopNav />
            <h1>Loading...</h1>
        </div>
    );

    if (!fruit)
    return (
        <div>
            <TopNav />
            <h1>Fruit not Found</h1>
        </div>
    );

    return (
        <div>
            <TopNav/>
            <div className="fruits-bin">
            <h1>Confirm delete Fruit <span style={{color: fruit.color}}>{fruit.name}</span></h1>
            <div className="fruits-center">
                <button className="red" onClick={doDelete}>Delete</button>
                <button className="green" onClick={() => window.location.href = '#fruits'}>Cancel</button>        
            </div>
            </div>
        </div>
    )
}