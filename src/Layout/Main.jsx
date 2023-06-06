import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";


const Main = () => {
    return (
        <div>
            <Container>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default Main;