import './user.css';


const UserBlock =  ({user}) => {

    const {id, name, username, email, address, phone, website, company} = user;

    return (
         <div className="user-block">
                <div className="user-block__user-data-field"> id: {id} </div>
                <div className="user-block__user-data-field"> name: {name}</div>
                <div className="user-block__user-data-field"> username: {username}</div>
                <div className="user-block__user-data-field"> email: {email}</div>

                <div className="user-block__user-data-field"> address:
                    <div> street: {address['street']}</div>
                    <div> suite: {address['suite']}</div>
                    <div> city: {address['city']}</div>
                    <div> zipcode: {address['zipcode']}</div>

                    <div> geo:
                        <div> lat: {address['geo']['lat']}</div>
                        <div> lng: {address['geo']['lng']}</div>
                    </div>

                 </div>

                <div className="user-block__user-data-field"> phone: {phone}</div>
                <div className="user-block__user-data-field"> website: {website}</div>

                <div className="user-block__user-data-field"> company:
                    <div> company Name: {company['companyName']}</div>
                    <div> catchPhrase: {company['catchPhrase']}</div>
                    <div> bs: {company['bs']}</div>
                </div>

         </div>
    );
};
export {UserBlock};