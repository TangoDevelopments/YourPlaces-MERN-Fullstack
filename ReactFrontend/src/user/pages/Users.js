import React from "react";
import UsersList from "../components/UsersList";


const Users = () => {
    const USERS = [{
    id: 'u1', 
    name: 'Andrew Tang', 
    image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2018%2F05%2F12170411%2Fcat-kitten-138468381.jpg&q=60', 
    places: 21
    }]

    return <UsersList items = {USERS}/>
}

export default Users