import './users.css';

import {UserBlock} from "../user/user";
import {UserData} from './usersInitData';

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