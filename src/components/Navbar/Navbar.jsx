import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    // navbar menu items
    const navItem = <>
        <li><Link to="/">Home</Link></li>
    </>;

    // handle logout 
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-neutral text-neutral-content rounded-lg mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItem
                        }
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img width='80px' src={logo} alt="Hello Summer" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <span className='text-white'>{user?.displayName}</span>
                            <button onClick={handleLogout} className="btn btn-primary text-white bg-[#005BA2] hover:bg-[#07416d]">Logout</button>
                        </> :
                        <>
                            <Link to="/login">
                                <button className="btn btn-primary text-white bg-[#005BA2] hover:bg-[#07416d]">Login</button>
                            </Link>
                        </>}
            </div>
        </div>
    );
};

export default Navbar;