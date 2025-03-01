
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { useContext } from 'react';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.name}</div>
            <div className="nav space-x-2">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login">
                <div className='flex gap-2'>
                    <img src={userIcon} alt="" />
                    {
                        user && user?.email ? <button onClick={logOut} className='btn btn-neutral rounded-none'>Log-Out</button> : <Link to="/auth/login" className='btn items-center btn-neutral rounded-none'>Login</Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;