import { Link } from 'react-router-dom';

// prettier-ignore
const Navbar = () => (
  <nav className="p-4 bg-green-100">
    <ul className="flex items-center max-w-[960px] mx-auto ">
      <li className="mr-auto text-xl font-bold"><Link to="/">myMoney</Link></li>
      
      <li><Link to="/login">login</Link></li>
      <li className="ml-4"><Link to="/signup">sign up</Link></li>
    </ul>
  </nav>
);

export default Navbar;
