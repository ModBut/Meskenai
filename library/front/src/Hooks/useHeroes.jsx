import { useState } from "react";

export default function useHeroes() {

    const [storeHeroe, setStoreHeroe] = useState(null);
    const [updateHeroe, setUpdateHeroe] = useState(null);
    const [destroyHeroe, setDestroyHeroe] = useState(null);

    return {
        storeHeroe, setStoreHeroe,
        updateHeroe, setUpdateHeroe,
        destroyHeroe, setDestroyHeroe
    }
}