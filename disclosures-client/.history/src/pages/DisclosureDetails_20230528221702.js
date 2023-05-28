import { Nav} from '../components/nav';

export function DisclosureDetails(){

    return (
        <>
            <nav>
                <NavLink to="/" className={({isActive}) => isActive ? "active" : "go-to"}>Create </NavLink>
                <NavLink to="/list" className={({isActive}) => isActive ? "active" : ""}>bacist </NavLink>
            </nav>
        <h2>Disclosure Details</h2>
        </>
    )
}