import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../auth/useAuthStore";
import { useEffect, useState } from "react";

const Header = () => {
  const [isToken, setToken] = useState(false);

  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const handleLogout = () => {
    logout()
  }
  useEffect(() => {
    if (!token) {
      setToken(false);
    } else {
      setToken(true);
    }
  }, [token]);
  return (
    <>
      <header className="flex justify-between items-center text-black p-3  border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 ">
        <div className="text-2xl font-bold  bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ">
          FitVista
        </div>
        <div className="flex items-center gap-5">
          <Link to="/services" className="text-base">
            <p>Services</p>
          </Link>
          <Link to="/blogs" className="text-base">
            <p>Blogs</p>
          </Link>
          <Link to="/aboutUs" className="text-base">
            <p>About</p>
          </Link>
          <Link to="/contactUs" className="text-base">
            <p>Contact</p>
          </Link>

          {/* <Link to="/profile" className="text-base">
            {userData}
          </Link> */}
          {isToken ? (
            <button
              onClick={handleLogout}
              className="text-sm font-medium bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/signin">
              <button className="text-sm font-medium bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
                Signin
              </button>
            </Link>
          )}

          <button className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md whitespace-nowrap  flex items-center justify-between gap-3 ">
            Try Free Trial <ArrowRight />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
