import Container from "react-bootstrap/esm/Container";
import { NavBarComponent } from "../navbar/Navbar";

export function HomeComponent(){
    return(
        <>
            <NavBarComponent/>
            <Container>
                <h1>Home component</h1>
            </Container>
        </>
        
    )
}