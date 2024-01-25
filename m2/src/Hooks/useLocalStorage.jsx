import { useEffect, useState } from "react";

export default function useLocalStorage(key, keyLt, initialValue) {

    const [value, setValue] = useState(initialValue);
    const [valueLt, setValueLt] = useState(initialValue)  

    // const [value, setValue] = useState(() => {
    //     const item = window.localStorage.getItem(key);
    //     return item ? JSON.parse(item) : initialValue;
    // });

    useEffect(() => {
        const item = window.localStorage.getItem(key);
        setValue(item ? JSON.parse(item) : initialValue);
        const itemLt = window.localStorage.getItem(keyLt);
        setValueLt(itemLt ? JSON.parse(itemLt) : initialValue);
    }, [key, keyLt, initialValue]);


    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    useEffect(() => {
        window.localStorage.setItem(keyLt, JSON.stringify(valueLt))
    }, [valueLt, keyLt]);


    return [value, setValue, valueLt, setValueLt];
}