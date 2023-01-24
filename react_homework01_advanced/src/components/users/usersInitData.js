
import {useEffect, useState} from "react";




 const UserData =  () =>
{
    const USERS_URL =() => {return  'https://jsonplaceholder.typicode.com/users'};
    const [usersData, setUsers] = useState ([]);

    useEffect(() => {
        fetch(USERS_URL())
            .then(data => data.json())
            .then (data => setUsers(data))
    }, []);

    return (usersData);
}

export {UserData};