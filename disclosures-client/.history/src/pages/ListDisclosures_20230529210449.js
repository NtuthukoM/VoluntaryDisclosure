import { useState, useEffect } from "react";
import { discloseUrl} from '../models/models';
import { Nav} from '../components/nav';
Hi,
I've come up with three options with their prices, each option is it's own total. Please see below:

- Static website: R2500
				  manual updating of products and prices @ R200 per batch of updates


- Product management on the website: R4500
									 This includes a login with the abilty to upload/update the products yourself.
									 Customers will be able to search for products.

- Checkout option: R8000
				  Cart
				  Invoice generation then management by you via a login.
				  Customer checkout/registration
				  Payment integration (online payments)
				  
The option is available for a phased approach where we start with the first option and until the last one in 3 stages.
			  

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
            <h2>Submitted Voluntary Disclosures</h2>
            {disclosures.length == 0 && 
                <p>No forms have been submitted.</p>
            }
            {disclosures.length > 0 && (
                <>
                <input type="text" placeholder="Search" /> <button type="button">Go</button>
                <table>
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
        </>
    );
}