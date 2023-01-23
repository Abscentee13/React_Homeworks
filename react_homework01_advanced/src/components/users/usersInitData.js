
const USERS_URL =() => {return  'https://jsonplaceholder.typicode.com/users'};

const UserData = () =>
{
//// TO DO catch exception, when offline
    const usersList = [];
    fetch(USERS_URL())
        .then((response) => ((response.ok?response.json(): document.write('sorry, online data is not available'))))//that is not work catch exception
        .then ((data) => {
            for (const datum of data) {
                usersList.push(datum);
            }
        });

    return (
            usersList
    );
}

export {UserData};