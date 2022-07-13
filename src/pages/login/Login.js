import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[360px] p-5 mx-auto my-14">
      <h2 className="text-xl font-bold ">Login</h2>

      <label className="block my-7">
        <span className="block mb-1">email :</span>
        <input
          type="email"
          className="w-full px-2 py-1 border border-gray-500 "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className="block my-7">
        <span className="block mb-1">password :</span>
        <input
          type="password"
          className="w-full px-2 py-1 border border-gray-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      {!isPending && (
        <button className="block px-3 py-1 text-green-600 border border-green-600 rounded hover:bg-green-600 hover:text-green-50">
          Login
        </button>
      )}

      {isPending && (
        <button disabled className="block px-3 py-1 text-gray-500 border border-gray-400 rounded ">
          loading...
        </button>
      )}

      {error && <p className="mt-1">{error}</p>}
    </form>
  );
};

export default Login;
