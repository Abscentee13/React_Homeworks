import {UserBlock} from "../user/user.js";
import {UserData} from './usersInitData';
import './users.css';

const Users = () => {
    return (
        <div >
            {
                UserData().map(user => <UserBlock key={user.id} user={user}/>)
            }
        </div>
    );

}

export {Users};