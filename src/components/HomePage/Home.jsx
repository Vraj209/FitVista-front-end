import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "@fontsource/inter";
import FeaturesCard from "../FeaturesCard";
import {
  BadgeDollarSign,
  Play,
  ShoppingCart,
  Video,
  MessageCircle,
  LayoutDashboard,
  DollarSign,
  Users,
  Zap,
} from "lucide-react";
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
            Grow your fitness brand,engage clients, and sell you programms - all
            in one place
          </h2>
          <p className="mt-5 text-xl text-black">
            Empower Your Journey, Transform Your Life
          </p>
          <button className="w-1/5 bg-black mt-12">
            Try FitVista for free
          </button>
          <p className="mt-3 text-gray-600">No credit card needed.</p>
        </section>
      </div>

      <section className="mt-10 flex flex-col justify-center items-center bg-[#F9FAFB] h-[350px] w-full">
        <h1 className="text-3xl font-bold">About FitVista</h1>
        <p className="w-2/3 text-center text-lg mt-3 text-gray-500">
          We are team of developers and wellness advocates passionate about
          simplifying digital fitness. FitVista was built to empower trainers,
          coaches, and creators to run a complete fitness business without tech
          headaches.
        </p>
      </section>

      <section className="mt-14">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-3xl font-bold">Everything you need to succeed</h1>
          <h4 className="text-gray-500">
            Powerful feature designed specifically for fitness professionals
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
          <FeaturesCard
            icon={Play}
            heading="On-demand Content Library"
            description="Build and organize your workout content library for clients to access anytime."
          />
          <FeaturesCard
            icon={Video}
            heading="Live Video Sessions"
            description="Host interactive live sessions with Zegocloud integration for seamless streaming."
          />
          <FeaturesCard
            icon={ShoppingCart}
            heading="E-commerce Store"
            description="Sell fitness products, programs, and merchandise directly to your audience."
          />
          <FeaturesCard
            icon={BadgeDollarSign}
            heading="Secure Payments"
            description="Process payments securely with Stripe integration and subscription management."
          />
          <FeaturesCard
            icon={LayoutDashboard}
            heading="Admin Dashboard"
            description="Manage users, sessions, and content from one comprehensive dashboard."
          />
          <FeaturesCard
            icon={MessageCircle}
            heading="Community Features"
            description="Engage with chat, blog, and community features to build stronger relationships"
          />
        </div>
      </section>

      <section className="p-8">
        <div className="mt-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white h-[450px] w-full flex flex-col items-center  shadow-xl rounded-lg p-3">
          <div className="flex flex-col  items-center gap-3 mt-28">
            <h1 className="font-bold text-4xl">Why choose FitVista?</h1>
            <h4>Transform your fitness business with these key benefits</h4>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 text-center mt-10">
            <div className="flex flex-col items-center gap-2">
              <DollarSign />
              <h2 className="font-bold text-xl">Increase Revenue</h2>
              <h4>Sell programs and products to boost your income streams</h4>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users />
              <h2 className="font-bold text-xl">Stronger Relationships</h2>
              <h4>Build deeper connections with live and chat features</h4>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap />
              <h2 className="font-bold text-xl">Save Time</h2>
              <h4>All-in-one admin tools streamline your workflow</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 bg-gradient-to-br from-white via-pink-50 to-fuchsia-100 py-10">
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-bold text-4xl">How it works</h1>
          <h4 className="text-gray-600 text-lg">
            Get started in 5 simple steps
          </h4>
        </div>
        <div className="mt-14 flex items-center justify-center">
          <div className="grid grid-cols-1 gap-5  ">
            {[
              {
                step: "1",
                title: "Sign up and customize",
                desc: "Create your fitness profile and customize your brand",
              },
              {
                step: "2",
                title: "Upload content",
                desc: "Add your workout content or go live instantly",
              },
              {
                step: "3",
                title: "Set prices",
                desc: "Configure pricing for your programs and start earning",
              },
              {
                step: "4",
                title: "Engage audience",
                desc: "Connect via chat, blogs, and live sessions",
              },
              {
                step: "5",
                title: "Track progress",
                desc: "Monitor everything from your comprehensive dashboard",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-5 items-center">
                <h1 className="border-2 w-10 h-10 flex items-center justify-center p-2 text-white font-bold bg-pink-400 rounded-full">
                  {step}
                </h1>
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold text-lg">{title}</h1>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
