import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";
import { FaBook, FaBookmark, FaCross, FaHouseUser, FaSwatchbook, FaUserEdit } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";



const Dashboard = () => {
    // const isAdmin = true;
    const isInstructor = true;
    const isStudent = true;

    const [isAdmin] = useAdmin();
    return (
        <div>
            <Container>
                <Navbar></Navbar>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* Page content here */}
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li><NavLink to="/dashboard/user-home"><FaHouseUser></FaHouseUser>User Home</NavLink></li>
                            {
                                isStudent && <>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? "active-link" : ""} to="/dashboard/student-selected-classes"><FaBookmark></FaBookmark>My Selected Classes</NavLink></li>
                                    <li><Link to=''><FaSwatchbook></FaSwatchbook>My Enrolled Classes</Link></li>
                                </>
                            }
                            {
                                isInstructor && <>
                                    <li><Link to=''><FaBook></FaBook>My Classes</Link></li>
                                    <li><Link to=''><FaCross></FaCross>Add Class</Link></li>
                                </>
                            }
                            {
                                isAdmin && <>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? "active-link" : ""} to="/dashboard/manage-classes"><FaUserEdit></FaUserEdit>Manage Classes</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? "active-link" : ""} to="/dashboard/manage-users"><FaSwatchbook></FaSwatchbook>Manage Users</NavLink></li>
                                </>
                            }

                        </ul>

                    </div>
                </div>
                <Footer></Footer>
            </Container>

        </div>
    );
};

export default Dashboard;