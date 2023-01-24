import {UserBlock} from "../user/user.js";
import {UserData} from './usersInitData';
import './users.css';

const Users = () => {

    const users = UserData();
            return (
                <div className="main-content">
                    {
                        users.map(user => <UserBlock key={user.id} user={user}/>)
                    }
                </div>
            );
}

export {Users};