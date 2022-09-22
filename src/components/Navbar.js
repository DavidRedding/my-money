import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import useLogout from '../hooks/useLogout';
import rm2 from '../assets/rm2.svg';

// prettier-ignore
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav className="py-4 bg-green-50 ">
      <ul className="flex items-center max-w-6xl px-5 mx-auto xs:px-10 ">
        <li className="mr-auto text-xl font-bold"><Link to="/"><img className="h-6" src={rm2} alt="Logo" /></Link></li>

        {!user && (
          <>
            <li className='hidden xs:block'><Link to="/login">login</Link></li>
            <li className="py-1 ml-4"><Link to="/signup">sign up</Link></li>
          </>
        )}

        {user && (
          <>
           <li className='hidden ml-4 xs:block'>{`hello, ${user.displayName}`}</li> 
            <li> 
              <button
                className="block px-3 py-1 ml-3 text-green-600 border border-green-600 rounded hover:bg-green-600 hover:text-green-50"
                onClick={logout}
              >
                logout
              </button>
            </li>
          </>
        )}
        
      </ul>
    </nav>
  );
};

export default Navbar;
