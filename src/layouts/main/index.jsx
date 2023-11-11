import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


export default function MainLayout() {

    return (
        <div >
            <Navbar/>
                <main className="container mx-auto flex flex-col gap-20">
                    <Outlet/>
                </main>
            <Footer />
        </div>

    )
}