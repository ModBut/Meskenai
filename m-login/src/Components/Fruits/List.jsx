import { useContext } from "react";
import TopNav from "../TopNav/TopNav";
import { Fruits } from "../../Contexts/Fruits";
import Fruit from "./Fruit";

export default function List() {

    const {fruits, setFilterForm, filterForm} = useContext(Fruits);

    function handleChange(e) {
        setFilterForm(e.target.value);
    }

    if (!fruits)
        return (
            <div>
                <TopNav />
                <h1>Loading...</h1>
            </div>
        );

    return (
        <div>
        <TopNav />
        <h1>Fruits List</h1>
        <label>Filter by Form:</label>
            <select  value={filterForm} onChange={handleChange}>
                <option value="all">All Forms</option>
                <option value="Square">Square</option>
                <option value="Circle">Circle</option>
                <option value="Rounded">Rounded</option>
            </select>
        <div className="fruits-box">
                {
                    fruits.map(fruit =>  <Fruit key={fruit.id} fruit={fruit} />)
                }
        </div>
    </div>
    )
}