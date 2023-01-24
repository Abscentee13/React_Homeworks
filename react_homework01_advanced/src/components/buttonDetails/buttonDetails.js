import './buttonDetails.css';

const ButtonDetails = ({id}) => {

    const checkUserPost = (id) => {

        if (document.getElementById('userPost' + id).style.display === "none")
           {
               document.getElementById('userPost' + id).style.display = "";
           }
        else
        {
            document.getElementById('userPost' + id).style.display = "none";
        }

    }


    return (
            <input type="button" value="➦" className = "button_detail" onClick={(e) => checkUserPost(id)}/>
    );
}

export {ButtonDetails};