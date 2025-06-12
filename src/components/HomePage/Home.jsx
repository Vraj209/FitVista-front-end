import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "@fontsource/inter";
function Home() {
  const { auth, setAuth } = useContext(AuthContext);
  const { userData, accessToken } = auth;
  console.log("user", userData);
  console.log("accessToken", accessToken);
  const logout = () => {
    setAuth({ userData: null, accessToken: null });
  };
  return (
    <>
      {/* hero section */}
      <div>
        <header className="flex justify-between items-center text-black p-5">
          <div className="text-2xl font-bold">FitVista</div>
          <div className="flex gap-5 border-2 p-2 pl-5 pr-5 rounded-xl">
            <Link to="/services" className="text-base">
              <p>Services</p>
            </Link>
            <Link to="/blogs" className="text-base">
              <p>Blogs</p>
            </Link>
            <Link to="/aboutUs" className="text-base">
              <p>About Us</p>
            </Link>
            <Link to="/contactUs" className="text-base">
              <p>Contact us</p>
            </Link>
          </div>
          <div>
            <Link to="/profile" className="text-base">
              {userData}
            </Link>
            <button onClick={logout} className="text-base bg-black">
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <section className="flex flex-col items-center justify-center w-full mt-24 font-">
          <h4>
            <span className="text-green-800 bg-green-300 p-2 pl-5 pr-5 rounded-full">
              For fitness coaches & wellness creators
            </span>
          </h4>
          <h2 className="mt-5  text-4xl w-2/3  font-bold text-black text-center">
            Grow your fitness brand,engage clients, and sell
            you programms - all in one place
          </h2>
          <p className="mt-5 text-xl text-black">
            Empower Your Journey, Transform Your Life
          </p>
          <button className="w-1/5 bg-black mt-12">
            Try FitVista for free
          </button>
          <p>No credit card needed.</p>
        </section>
      </div>

      {/* Black Overlay */}
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div> */}

      {/* Navbar inside hero section */}

      {/* Services Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Our Services
          </h2>
          <div className="flex flex-wrap">
            {/* Service Item */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-6">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Personal Training</h3>
                <p>
                  One-on-one training sessions tailored to your unique fitness
                  goals, ensuring personalized attention and maximized results.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-6">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Group Training</h3>
                <p>
                  Engage in fun and challenging workout sessions with a
                  community of peers, led by experienced trainers to keep you
                  motivated.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Pre-Recorded Sessions
                </h3>
                <p>
                  Access a library of pre-recorded workout sessions anytime,
                  anywhere, to fit your schedule and keep your fitness journey
                  on track.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-6">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Ecommerce</h3>
                <p>
                  Discover our curated selection of fitness gear and nutrition
                  supplements to support your fitness journey and lifestyle.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-6">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Informative Blogs</h3>
                <p>
                  Stay informed and inspired with our extensive library of
                  fitness and wellness articles, tips, and success stories.
                </p>
              </div>
            </div>

            {/* Affordable Membership */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Affordable Membership
                </h3>
                <p>
                  Unlock full access to all our features with affordable
                  membership plans designed to fit every budget and fitness
                  level.
                </p>
              </div>
            </div>
            {/* Repeating Service Items for other services */}
            {/* Consider copying the above div and modifying the content for other services like Nutrition Planning, Online Coaching, etc. */}
          </div>
        </div>
      </div>
      {/* Membership Plans Section */}

      {/* Membership Plans Section - Improved Design */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Choose Your Plan
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 -mx-4">
            {/* Budget Membership Plan */}
            <div className="w-full md:w-1/3 px-4">
              <div className="p-6 rounded-lg shadow-lg bg-gradient-to-tr from-blue-500 to-blue-300 hover:shadow-xl transition duration-500 transform hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Silver Membership
                </h3>
                <p className="text-md text-blue-100 mb-4">
                  Start your fitness journey with essential features.
                </p>
                <ul className="text-sm text-blue-100 mb-6">
                  <li>✔ Basic workout library</li>
                  <li>✔ Community access</li>
                </ul>
                <p className="text-lg font-bold text-white mb-4">$19 / month</p>
                <button className="mt-4 px-4 py-2 bg-white text-blue-500 font-bold rounded hover:bg-gray-100 transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>

            {/* Gold Membership Plan */}
            <div className="w-full md:w-1/3 px-4">
              <div className="p-6 rounded-lg shadow-lg bg-gradient-to-tr from-green-500 to-green-300 hover:shadow-xl transition duration-500 transform hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Gold Membership
                </h3>
                <p className="text-md text-green-100 mb-4">
                  Everything in Budget, plus more advanced features.
                </p>
                <ul className="text-sm text-green-100 mb-6">
                  <li>✔ Unlimited class access</li>
                  <li>✔ One to one coaching plans</li>
                  <li>✔ Monthly coaching sessions</li>
                  <li>✔ 10% off on products</li>
                </ul>
                <p className="text-lg font-bold text-white mb-4">$49 / month</p>
                <button className="mt-4 px-4 py-2 bg-white text-green-500 font-bold rounded hover:bg-gray-100 transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* user say */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Hear From Our Happy Users
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Testimonial Card 1 */}
            <div className="max-w-sm bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 italic">
                Joining fitVista was the best decision for my health. The
                community and trainers are incredibly supportive.
              </p>
              <div className="mt-4">
                <p className="font-bold text-lg">Alex Johnson</p>
                <p className="text-gray-400">Enthusiastic Member</p>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="max-w-sm bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 italic">
                The variety of workouts and nutrition plans transformed my
                lifestyle. I have never felt better!
              </p>
              <div className="mt-4">
                <p className="font-bold text-lg">Samantha Lee</p>
                <p className="text-gray-400">Lifestyle Change Advocate</p>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="max-w-sm bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 italic">
                Their personalized fitness plans and tracking tools helped me
                reach my goals in record time.
              </p>
              <div className="mt-4">
                <p className="font-bold text-lg">Michael Brown</p>
                <p className="text-gray-400">Goal Achiever</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="sm:flex sm:justify-between">
            <div>
              <h3 className="font-bold text-xl">fitVista</h3>
              <p className="text-gray-400 mt-2">
                Empowering Your Fitness Journey, One Step at a Time
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <h3 className="font-bold">Contact & Follow Us</h3>
              <p className="mt-2">Email: support@fitvista.com</p>
              <div className="flex mt-3">
                <a href="#" className="mr-4 hover:text-gray-300">
                  Facebook
                </a>
                <a href="#" className="mr-4 hover:text-gray-300">
                  Twitter
                </a>
                <a href="#" className="hover:text-gray-300">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-6 border-t border-gray-700 pt-4">
            © 2024 fitVista. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
