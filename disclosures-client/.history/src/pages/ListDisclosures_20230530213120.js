import { useState, useEffect } from "react";
import { discloseUrl} from '../models/models';
import { Nav} from '../components/nav';
import {NavLink} from "react-router-dom"

export function ListDisclosures(){
    
    const [disclosures, setDisclosures] = useState([]);
    useEffect(() => {
        fetch(discloseUrl).then(x => x.json())
        .then(setDisclosures)
        .catch(exc => console.log(exc));
    }, []);
    return (
        <>
            <Nav/>
            <div class="card col-md-">
  <h5 className="card-header">Submitted Voluntary Disclosures</h5>
  <div className="card-body">
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

          
            {disclosures.length == 0 && 
                <p>No forms have been submitted.</p>
            }
            {disclosures.length > 0 && (
                <>
                <input type="text" placeholder="Search" /> <button className="btn btn-success" type="button">Go</button>
                <table className="table  table-success table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date submitted</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {disclosures.map(x => (
                        <tr key={x.id}>
                            <td>{x.fullName}</td>
                            <td>{x.email}</td>
                            <td>{x.createDate.split('T')[0]}</td>
                            <td>
                                <NavLink to={`/details/${x.id}`}>details</NavLink>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
                </>
            )}
              </div>
</div>  
        </>
    );
}