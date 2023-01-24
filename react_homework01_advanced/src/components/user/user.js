import './user.css';


const UserBlock =  ({user}) => {
    const {id, name} = user;

    return (
        <div>
            <div>
                <div>
                    id: {id}
                </div>
                <div>
                    name: {name}
                </div>

            </div>
        </div>
    );
};
export {UserBlock};