import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout';

// prettier-ignore
const Navbar = () => {
  const {logout} = useLogout();
  return (
  <nav className="p-4 bg-green-100">
    <ul className="flex items-center max-w-[960px] mx-auto ">
      <li className="mr-auto text-xl font-bold"><Link to="/">myMoney</Link></li>
      
      <li><Link to="/login">login</Link></li>
      <li className="ml-4"><Link to="/signup">sign up</Link></li>

      <li><button className="block px-3 py-1 ml-4 text-green-600 border border-green-600 rounded hover:bg-green-600 hover:text-green-50" onClick={logout}>logout</button></li>
    </ul>
  </nav>
)};

export default Navbar;
