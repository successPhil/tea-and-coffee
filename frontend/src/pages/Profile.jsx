import { useState, useContext } from "react"
import UserContext from "../contexts/UserContext"
import AddProfile from "../features/UserProfile/AddProfile"
export default function Profile ({getUserData}) {
    const {userData } = useContext(UserContext)
    const [ addProfileForm, setAddProfileForm ] = useState(false)
    const handleAddProfile = () => {
        setAddProfileForm(!addProfileForm)
    }
    console.log(userData, 'in Profile')
    return (
        <>
        {userData && (
            <>
            <h2>First Name: {userData.first_name}</h2>
        <h2>Last Name: {userData.last_name}</h2>
        <h3>About Me: {userData.about_me}</h3>
        </>

        )}
        <button id="add-coffee-button" onClick={handleAddProfile}>update profile</button>
        
        {addProfileForm && <AddProfile handleAddProfile={handleAddProfile} getUserData={getUserData}/>}
        </>
    )
}