import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    // navbar menu items
    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        {user && <li><Link to="/dashboard/user-home">Dashboard</Link></li>}
    </>;

    // handle logout 
    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar max-w-7xl mx-auto mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {
                            navItem
                        }
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='none md:flex md:w-20 ' src={logo} alt="Hello Summer" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-lg">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className='flex'>
                                <div className="avatar mr-2">
                                    <div className="w-12 rounded-full">
                                        <img title={user?.displayName} src={user?.photoURL} />
                                    </div>
                                </div>
                                <button onClick={handleLogout} className="btn text-white bg-[#ec7d4a] hover:bg-[#fb8b57]">Logout</button>
                            </div>
                        </> :
                        <>
                            <Link to="/login">
                                <button className="btn text-white bg-[#ec7d4a] hover:bg-[#fb8b57]">Login</button>
                            </Link>
                        </>}
            </div>
        </div>
    );
};

export default Navbar;