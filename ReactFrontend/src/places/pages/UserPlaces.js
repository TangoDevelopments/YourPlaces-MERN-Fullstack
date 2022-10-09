import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Taipei 101',
        description: 'One of the tallest buildings in the world',
        imageUrl: 'https://s3.amazonaws.com/images.skyscrapercenter.com/thumbs/2739_500x650.jpg',
        address: 'No. 45, Shifu Rd, Xinyi District, Taipei City, Taiwan 110',
        location: {
            lat: 25.0287101,
            lng: 121.5348331
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Taipei 101',
        description: 'One of the tallest buildings in the world',
        imageUrl: 'https://s3.amazonaws.com/images.skyscrapercenter.com/thumbs/2739_500x650.jpg',
        address: 'No. 45, Shifu Rd, Xinyi District, Taipei City, Taiwan 110',
        location: {
            lat: 25.0287101,
            lng: 121.5348331
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces