import { useContext } from "react"
import logo from ".././assets/images/logo.png"
import { AuthContext } from "../provider/AuthProvider"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
            <div className='flex-1'>
                <div className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src={logo} alt='' />
                    <span className='font-bold'>SoloSphere</span>
                </div>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                    {
                        !user && <>
                            <NavLink to="/login" >
                                <li>
                                    <div>Login</div>
                                </li>
                            </NavLink>
                            <NavLink to="/registation" >
                                <li>
                                    <div>Register</div>
                                </li>
                            </NavLink>
                        </>
                    }
                </ul>

                {
                    user && <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div className='w-10 rounded-full' title={user.displayName}>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <NavLink to="/add-jobs" className='justify-between'>Add Job</NavLink>
                            </li>
                            <li>
                                <Link to="/my-posted-jobs" >My Posted Jobs</Link>
                            </li>
                            <li>
                                <Link to="/my-bids" >My Bids</Link>
                            </li>
                            <li>
                                <Link to="bid-request" >Bid Requests</Link>
                            </li>
                            <NavLink to="/registation" >
                                <li className='mt-2'>
                                    <button className='bg-gray-200 block text-center'>Registation</button>
                                </li>
                            </NavLink>
                                <li className='mt-2'>
                                    <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
                                </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar