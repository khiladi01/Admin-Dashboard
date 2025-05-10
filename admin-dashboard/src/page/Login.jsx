import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sideimg from '../assets/loginimg/loginimage.jpg';
import signing from '../assets/loginimg/googlesignin.svg';

const Login = ({ username, setUsername, userpassword, setUserpassword }) => {
  const [error, setError] = useState('');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handler = (e) => {
    e.preventDefault();
    if (username === "") {
      setError("Username Is Required");
    } else {
      setError("Login Success");
      console.log("Login :", username, userpassword);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row justify-center items-center p-4 select-none">
        {/* Image Section */}
        <div className="w-full lg:w-[500px] h-auto lg:h-[500px] shadow mb-6 lg:mb-0">
          <img
            src={sideimg}
            alt="image"
            className={`w-full h-full object-cover ${animate ? 'animate-slide-left-to-right' : ''}`}
          />
        </div>

        {/* Login Form Section */}
        <div className="w-full lg:w-[500px] h-auto lg:h-[500px] shadow flex flex-col justify-center">
          <div className="h-[50px] grid place-content-center">
            <header className="text-3xl text-slate-800 font-medium">Login</header>
          </div>

          <div className="flex justify-center items-center px-4">
            <form onSubmit={handler}>
              <div className="mt-[5px]">
                <label htmlFor="username">Username</label>
              </div>
              <div className="mt-[10px]">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-[300px] h-[35px] shadow pl-3 outline-0 border-[1px] border-rose-100"
                />
              </div>
              <div className="mt-[10px]">
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <div className="mt-[5px]">
                <label htmlFor="userpassword">Password</label>
              </div>
              <div className="mt-[5px]">
                <input
                  type="password"
                  value={userpassword}
                  onChange={(e) => setUserpassword(e.target.value)}
                  className="w-[300px] h-[35px] shadow pl-3 outline-0 border-[1px] border-rose-100"
                />
              </div>
              <div className="mt-[20px]">
                <input
                  type="submit"
                  value="Login"
                  className="float-right w-[120px] h-[40px] shadow rounded-full bg-rose-300 text-white hover:bg-rose-400 cursor-pointer"
                />
                <input type="checkbox" className="w-[20px] h-[20px]" />
                <span className="ml-[5px]">Remember Me</span>
              </div>
              <div className="mt-[30px]">
                <span className="text-rose-500">
                  <Link to="">Create Account</Link>
                </span>
                <span className="float-right text-gray-500">
                  <Link to="">Forget Password</Link>
                </span>
              </div>
              <div className="mt-[20px] text-gray-300 flex justify-center">
                ___________________ or ___________________
              </div>
              <div className="mt-[20px]">
                <Link to="">
                  <img src={signing} alt="google" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
