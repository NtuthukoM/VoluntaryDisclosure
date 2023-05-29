import {NavLink} from "react-router-dom"

export function DisclosureDetails(){
    function useQuery() {
        const { search } = useLocation();
        console.log(search);
        return React.useMemo(() => new URLSearchParams(search), [search]);
      }
      let query = useQuery();
      console.log(query)          ;
    return (
        <>
            <nav>
                <NavLink to="/list" className={({isActive}) => isActive ? "active" : ""}>back to list </NavLink>
            </nav>
        <h2>Disclosure Details</h2>
        </>
    )
}