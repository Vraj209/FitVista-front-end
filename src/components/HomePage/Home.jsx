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
  ArrowRight,
} from "lucide-react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


function Home() {
  
  
  return (
    <>
      <Header />

      <main>
        <section className="flex flex-col items-center justify-center w-full h-auto pt-24 pb-12 bg-gradient-to-br from-purple-50 via-white to-pink-50  ">
          <h4>
            <span className="text-purple-800 bg-purple-300 p-2 pl-5 pr-5 rounded-full">
              For fitness coaches & wellness creators
            </span>
          </h4>
          <h2 className="mt-5  text-4xl w-2/3  font-bold text-black text-center">
            Grow your fitness brand,engage clients, and sell you programms{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              all in one place
            </span>
          </h2>
          <p className="mt-5 text-xl text-gray-600">
            FitVista helps you coach, connect, and monetize with ease
          </p>
          <button className="w-1/5 bg-gradient-to-r from-purple-600 to-pink-600 mt-12 flex gap-3 items-center justify-between pl-4">
            Try FitVista for free <ArrowRight /> 
          </button>
          <p className="mt-3 text-gray-600">No credit card needed.</p>
         
        </section>

        {/* About Section */}
        <section className=" flex flex-col justify-center items-center bg-[#F9FAFB] h-[350px] w-full">
          <h1 className="text-3xl font-bold">About FitVista</h1>
          <p className="w-2/3 text-center text-lg mt-3 text-gray-500">
            We are team of developers and wellness advocates passionate about
            simplifying digital fitness. FitVista was built to empower trainers,
            coaches, and creators to run a complete fitness business without
            tech headaches.
          </p>
        </section>

        {/* Features Section */}
        <section className="mt-14">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="text-3xl font-bold">
              Everything you need to succeed
            </h1>
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

        {/* Why Choose Section */}
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

        {/* How Its works */}
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

        {/* Testimonial */}
        <section>
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
                    Their personalized fitness plans and tracking tools helped
                    me reach my goals in record time.
                  </p>
                  <div className="mt-4">
                    <p className="font-bold text-lg">Michael Brown</p>
                    <p className="text-gray-400">Goal Achiever</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="h-auto p-16">
          <div className=" flex flex-col gap-2 items-center ">
            <h1 className="font-bold text-4xl mt-5">Success Story</h1>
            <h4 className="text-gray-500">John Bootcamp transformation</h4>

            <div className="border-2 w-2/3  p-10  rounded-lg shadow-lg border-white">
              <div className="flex flex-col gap-1">
                <h1 className="font-bold text-lg ">
                  John switched from 3 separate tools to FitVista
                </h1>
                <p className="text-gray-500 mt-2">
                  In just 2 months, here is what happened:
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 text-center">
                <div>
                  <h1 className="text-4xl font-bold text-green-500">+40%</h1>
                  <h4 className="text-gray-500">Revenue Increase</h4>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-green-500">+80%</h1>
                  <h4 className="text-gray-500">Engagement rate</h4>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-green-500">+100%</h1>
                  <h4 className="text-gray-500">Content centralized</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comaprison */}
        <section className="py-16 px-4 md:px-20 bg-gray-50 ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            How we compare
          </h2>

          <div className="overflow-auto">
            <table className="min-w-full text-left  border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-white border-b">
                  <th className="px-6 py-4 text-gray-700 font-semibold">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-purple-600 font-bold">
                    FitVista
                  </th>
                  <th className="px-6 py-4 text-gray-800 font-semibold">
                    Kajabi
                  </th>
                  <th className="px-6 py-4 text-gray-800 font-semibold">
                    Zoom + Stripe
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">Live sessions</td>
                  <td className="px-6 py-4">✅</td>
                  <td className="px-6 py-4 text-gray-500">Add-on</td>
                  <td className="px-6 py-4">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">E-commerce store</td>
                  <td className="px-6 py-4">✅</td>
                  <td className="px-6 py-4">✅</td>
                  <td className="px-6 py-4 text-gray-400">❌</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 ">Admin dashboard</td>
                  <td className="px-6 py-4 ">✅</td>
                  <td className="px-6 py-4">✅</td>
                  <td className="px-6 py-4 text-gray-400">❌</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Custom branding</td>
                  <td className="px-6 py-4">✅</td>
                  <td className="px-6 py-4">✅</td>
                  <td className="px-6 py-4 text-gray-400">❌</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing card */}
        <section className="h-auto py-16">
          <div className="container flex flex-col gap-5 justify-center items-center w-full">
            <div>
              <h1 className="font-bold text-4xl">
                Simple, transparent pricing
              </h1>
              <h4 className="text-center text-gray-500 mt-2">
                Start free, upgrade when you are ready
              </h4>
            </div>
            <div className="border-2 rounded-lg p-10 mt-10 shadow-xl border-purple-400">
              <div className="text-center flex flex-col gap-1">
                <h1 className="font-bold text-2xl">Free Trial</h1>
                <h4 className="text-gray-500 text-base">
                  No credit card required
                </h4>
                <h1 className="font-bold text-4xl">Free</h1>
                <h4 className="text-gray-500 mt-5">
                  Premium plans start at $19/month with:
                </h4>
              </div>
              <div className="flex flex-col gap-2 pt-4 text-left">
                <h4>✅ Unlimited live sessions</h4>
                <h4>✅ Full e-commerce features</h4>
                <h4>✅ Advanced analytics</h4>
                <h4>✅ Priority support</h4>
                <button className="mt-5 bg-gradient-to-r from-purple-600 to-pink-600 flex justify-between">
                  Start Free Trial Here <ArrowRight />
                </button>
                <p className="text-left text-gray-500">
                  No credit card required
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Is there a free trial?",
                a: "Yes! We offer a 14-day free trial with full access to all features. No credit card needed.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Absolutely. You're free to cancel your subscription at any time from your dashboard.",
              },
              {
                q: "Is FitVista suitable for small teams?",
                a: "Yes. Whether you're a solo coach or a small team, FitVista scales with your business.",
              },
            ].map(({ q, a }, idx) => (
              <details
                key={idx}
                className="border border-gray-200 rounded-md p-4"
              >
                <summary className="font-semibold cursor-pointer">{q}</summary>
                <p className="mt-2 text-gray-600">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* footer */}
      </main>
      <Footer />
    </>
  );
}

export default Home;
