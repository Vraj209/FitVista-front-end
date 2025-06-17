import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
function ServicesPage() {
  return (
    <div>
      {/* Hero Image with Text */}

      <div className="relative">
        {/* logo */}

        <img
          src="https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
          className="w-full h-96 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-white text-7xl font-bold">Our Services</h1>
          <p className="text-white text-xl mt-5">
            Explore our wide range of fitness services
          </p>
        </div>
      </div>

      {/* Services Cards Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8">
          {/* Card 1 */}

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="object-cover m-5 rounded-2xl overflow-hidden ">
              <img
                src="https://plus.unsplash.com/premium_photo-1684785617500-fb22234eeedd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Service"
                className="w-full h-50  object-cover shadow-md drop-shadow-md rounded-xl"
              />
            </div>

            <div className="p-4">
              <h3 className="font-bold text-xl">E-commerce</h3>
              <p className="mt-2 text-gray-600">
                Discover the best in fitness gear and nutrition. Our online
                store offers a wide range of products to support your health and
                wellness journey.
              </p>
              <p className="mt-2 text-gray-600">
                From the latest equipment to the cleanest supplements, find
                everything you need to fuel your workouts and recovery.
              </p>
              <Link to="/ecommerce">
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                  Go to E-commerce
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="object-cover m-5 rounded-2xl overflow-hidden ">
              <img
                src="https://plus.unsplash.com/premium_photo-1672997189689-6fff48def03f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Service"
                className="w-full h-50  object-cover shadow-md drop-shadow-md rounded-xl"
              />
            </div>

            <div className="p-4">
              <h3 className="font-bold text-xl">One to One Session</h3>
              <p className="mt-2 text-gray-600">
                Personalized training sessions tailored just for you. Work
                one-on-one with our certified trainers to create a fitness plan
                that’s as unique as you are.
              </p>
              <p className="mt-2 text-gray-600">
                Whether your goal is to lose weight, gain muscle, or improve
                your overall fitness, our experts are here to guide you .
              </p>
              <Link to="/personal-training">
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                  Go to Personal Training
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="object-cover m-5 rounded-2xl overflow-hidden ">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                alt="Service"
                className="w-full h-50  object-cover shadow-md drop-shadow-md rounded-xl"
              />
            </div>

            <div className="p-4">
              <h3 className="font-bold text-xl">Group Training</h3>
              <p className="mt-2 text-gray-600">
                Join our group training sessions for a motivating and social
                fitness experience. Our classes cater to all levels and include
                a variety of workout styles.
              </p>
              <p className="mt-2 text-gray-600">
                Get fit, have joy, have fun, and meet like-minded individuals in
                our supportive fitness community.
              </p>
              <Link to="/group-training">
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                  Go to Group Training
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="object-cover m-5 rounded-2xl overflow-hidden ">
              <img
                src="https://images.unsplash.com/photo-1579191204609-7334df4afc33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Service"
                className="w-full h-50  object-cover shadow-md drop-shadow-md rounded-xl"
              />
            </div>

            <div className="p-4">
              <h3 className="font-bold text-xl">Pre-Recorded Session</h3>
              <p className="mt-2 text-gray-600">
                Access our comprehensive library of pre-recorded workout
                sessions anytime, anywhere. Perfect for those with busy
                schedules or prefer to workout.
              </p>
              <p className="mt-2 text-gray-600">
                Choose from a wide range of workouts, from beginner to advanced
                levels.
              </p>
              <Link to="/pre-recorded-session">
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                  Go to Pre-Recorded Session
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default ServicesPage;
