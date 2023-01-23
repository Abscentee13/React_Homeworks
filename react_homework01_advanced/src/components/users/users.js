import {UserBlock} from "../user/user.js";
import {UserDataFromJsonPlaceholder} from './usersInitData';
import './users.css';


const Users = () => {

    return (
        <div className="characters-block">
            {
                UserDataFromJsonPlaceholder.map(user => <UserBlock key={user.id} user={user}/>)
            }
        </div>
    );

}

export {Users};