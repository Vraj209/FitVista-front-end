import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHandshake,
  faBalanceScale,
  faSmile,
  faBolt,
  faFire,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section relative">
        <img
          src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gym"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-5xl font-bold text-center">
            About Us
          </h1>
        </div>
      </div>
      <div className="m-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* About Our Gym Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">About Our Gym</h2>
            <p className="text-lg">
              Welcome to our gym! We are committed to providing a welcoming and
              motivating environment for all our members to achieve their
              fitness goals.
            </p>
          </div>

          {/* Our Mission & Vision Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-lg mb-4">
              Our mission is to empower individuals to lead healthier lives by
              providing access to top-notch fitness equipment, personalized
              training programs, and a supportive community.
            </p>
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-lg">
              We envision a future where everyone prioritizes their health and
              well-being, and our gym plays a pivotal role in making this vision
              a reality through continuous innovation and dedication.
            </p>
          </div>

          {/* FitVista Kids Foundation Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">
              FitVista Kids Foundation
            </h3>
            <p className="text-lg">
              FitVista Kids Foundation is a registered charity with a vision for
              kids with special needs to have equal opportunities to experience
              the joys and benefits of being active. To date, we’ve impacted the
              lives of over 254,000 Canadian kids through physical activity
              opportunities!
            </p>
          </div>

          {/* Support the North Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Support the North</h3>
            <p className="text-lg">
              Support the North We help reduce barriers faced by northern,
              remote and Indigenous communities by sharing FitVista health and
              fitness expertise and donating equipment to help youth get active.
            </p>
          </div>

          {/* Teen Fitness Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Teen Fitness</h3>
            <p className="text-lg">
              Teen Fitness Did you know that 93 percent of youth in Canada do
              not meet the national physical activity guidelines? Since 2010,
              we’ve offered more than 1 million free memberships to youth aged
              12 to 17 during the summer months to help build healthy habits for
              life.
            </p>
          </div>

          {/* Core Values Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Our Core Values</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2" />
                <p className="text-lg">Caring</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="text-green-500 mr-2"
                />
                <p className="text-lg">Trust</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faBalanceScale}
                  className="text-blue-500 mr-2"
                />
                <p className="text-lg">Integrity</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faSmile}
                  className="text-yellow-500 mr-2"
                />
                <p className="text-lg">Happiness</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faBolt}
                  className="text-orange-500 mr-2"
                />
                <p className="text-lg">Peak Attitude</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faFire} className="text-red-700 mr-2" />
                <p className="text-lg">Passion</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faUser} className="text-blue-700 mr-2" />
                <p className="text-lg">Personal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
