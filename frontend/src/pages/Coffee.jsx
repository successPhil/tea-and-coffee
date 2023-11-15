import { coffeeFetch } from "../api/dataApi"
import { useEffect, useContext, useState } from "react"
import UserContext from "../contexts/UserContext"
import { useNavigate } from "react-router-dom"


export default function Coffee() {
    const navigate = useNavigate()
    const { userToken } = useContext(UserContext)
    const [ coffeeName , setCoffeeName ] = useState()
    const [ description, setDescription ] = useState()
    const [ picture, setPicture ] = useState()
    const [errors, setErrors ] = useState()
    const [ coffees, setCoffees ] = useState([])

    const handleCoffeeNameChange = (e) => setCoffeeName(e.target.value)
    const handleDescriptionChange = (e) => setDescription(e.target.value)
    const handlePictureChange = (e) => setPicture(e.target.files[0])

    const handleSubmit = (e) => {
        e.preventDefault()
        const coffeeObject = {
            name: coffeeName,
            description: description,
            picture: picture
        }
        addCoffee(coffeeObject)
    }

    const handleTestFetch = async () => {
        const fetchedCoffees = await coffeeFetch();
        setCoffees(fetchedCoffees)
    }
    

    const addCoffee = async (coffeeObj) => {
        const base_url = import.meta.env.VITE_BASE_URL
        const url = `http://${base_url}/api/v1/coffee/`
        let formData = new FormData()
        formData.append("name", coffeeObj.name)
        formData.append("description", coffeeObj.description)
        formData.append("picture", coffeeObj.picture)
        const context = {
            method: "POST",
            body: formData,
            headers: {
                'Authorization': `token ${userToken}`,
                },
        }
        const response = await fetch(url, context)
        const body = await response.json()
        if (response.status === 400) {
            setErrors(body)
        } else {
            navigate("/")
        }
    }

    const createCoffeeList = () => {
        return coffees.map( coffee => {
            return (
            <div key={coffee.name}>
            <h2>{coffee.name}</h2>
            <img src={coffee.picture}/>
            </div>)
        })
    }
    
    
    
    return (
    <>
    <h1>Share your favorite coffee</h1>
    {errors && <h4>{JSON.stringify(errors)}</h4>}


    <div>
        <label htmlFor="coffeeName">Coffee Name:</label>
        <input value={coffeeName} name="coffeeName" onChange={handleCoffeeNameChange}></input>
    </div>

    <div>
        <label htmlFor="description">Description:</label>
        <input value={description} name="description" onChange={handleDescriptionChange}></input>
    </div>

    <div>
        <label htmlFor="coffeeImage">Coffee Image: </label>
        <input type="file" name="coffeeImage" onChange={handlePictureChange}></input>
    </div>

    <div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTestFetch}>Test Fetch</button>
    </div>

    {coffees && createCoffeeList()}

    </>)
}