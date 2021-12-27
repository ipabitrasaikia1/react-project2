import '../App.css';
import { Groceryinput } from './Groceryinput';

export const Groceryitems = ({ title, status, id ,getDel}) => {

    const handleStatus = (e) => {
        // let item =  document.getElementById("status")

        if (e.target.textContent == "Not done") {

            e.target.textContent = "Done"
            e.target.style.backgroundColor = "mediumseagreen"
        }
        else {
            e.target.textContent = "Not done"
            e.target.style.backgroundColor = "tomato"
        }


    }

    const handleDelete = (id) => {
    
        getDel(id)
   

        


    }

    return <>

        <table className="tableData">

            <tbody>
                <tr>
                    <td> <h1>{title}</h1></td>

                    <td onClick={handleStatus}> {status ? "Done" : "Not done"} </td>
                    <td onClick={() => handleDelete(id)}>Delete</td>
                </tr>
            </tbody>
        </table>
    </>
}