import { coffeeFetch } from "../api/dataApi"
import { useEffect, useState } from "react"

import AddCoffee from "../features/Coffee/AddCoffee"

export default function Coffee() {
    const [ coffees, setCoffees ] = useState([])
    const [ addCoffeeForm, setAddCoffeeForm ] = useState(false)

    const handleAddCoffee = () => {
        setAddCoffeeForm(true)
    }

    useEffect(() => {
        getCoffeeData()
    }, [])

    const capitalizeWords = (str) => {
        return str
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      };

    const createCoffeeList = () => {
        return coffees.map( coffee => {
            return (
            <div key={capitalizeWords(coffee.name)} className="coffee-card">
            <h2>{coffee.name}</h2>
            <p>{coffee.description}</p>
            <img className="coffee-thumbnail" src={coffee.picture}/>
            <h4>{coffee.caffeine} mg</h4>
            <h4>{coffee.rating}</h4>
            </div>)
        })
    }

    const getCoffeeData = async () => {
        const fetchedCoffees = await coffeeFetch();
        setCoffees(fetchedCoffees)
    }

    console.log(coffees)
    
    return (
    <>
    <div>
        <button onClick={handleAddCoffee}>add coffee</button>
    </div>

    {coffees && createCoffeeList()}
    {addCoffeeForm && <AddCoffee/>}

    </>)
}