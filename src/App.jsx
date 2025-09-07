import React, { useState } from "react";
import {
  Home,
  Info,
  Heart,
  Calendar,
  Users,
  GraduationCap,
  HandHeart,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";
import StudentPortal from "./components/StudentPortal";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showStudentPortal, setShowStudentPortal] = useState(false);

  const navigationItems = [
    { icon: Home, label: "Home", href: "#home " },
    { icon: Info, label: "About", href: "#about" },
    { icon: Heart, label: "Donor", href: "#donor" },
    { icon: Calendar, label: "Events", href: "#events" },
    { icon: Users, label: "Membership", href: "#membership" },
  ];

  const portals = [
    {
      title: "Students Portal",
      description:
        "Access scholarships, educational resources, and mentorship programs designed to support your academic journey.",
      icon: GraduationCap,
      buttonText: "Student Sign-In",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Donors Portal",
      description:
        "Make a difference in the community. Track your contributions and see the impact of your generous support.",
      icon: HandHeart,
      buttonText: "Donate Now",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Events Portal",
      description:
        "Join our community events, volunteer opportunities, and stay updated on upcoming initiatives.",
      icon: Calendar,
      buttonText: "View Events",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Community Care Foundation
                </h1>
                <p className="text-xs text-gray-500">
                  test@test
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gray-50"
                >
                  <item.icon className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors duration-200" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {item.label}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white py-20 relative overflow-hidden">
        {/* Natural overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-emerald-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-emerald-400 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Communities
            <br />
            <span className="text-green-200">Through Hope</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
            Join us in making a lasting impact on education, healthcare, and
            community development across underserved regions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Get Involved Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-all duration-200 transform hover:scale-105">
              Learn Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Access Your Portal
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your portal below to access personalized resources, track
              your involvement, and stay connected with our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portals.map((portal, index) => (
              <div
                key={portal.title}
                className={`${portal.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 ${portal.iconColor} bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <portal.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {portal.title}
                  </h4>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {portal.description}
                  </p>
                  <button
                    onClick={() => {
                      if (portal.title === "Students Portal") {
                        setShowStudentPortal(true);
                      }
                    }}
                    className={`w-full ${portal.buttonColor} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md`}
                  >
                    {portal.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Membership Plans
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our community and help us make a lasting impact. Choose the
              membership level that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Basic</h4>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">$300</span>
                  <span className="text-gray-500">/year</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      Monthly newsletter updates
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      Access to community events
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Annual impact report</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md">
                  Choose Basic
                </button>
              </div>
            </div>

            {/* Medium Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Medium
                </h4>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-green-600">
                    $600
                  </span>
                  <span className="text-gray-500">/year</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Everything in Basic</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      Priority event registration
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      Quarterly member meetups
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      Volunteer opportunities
                    </span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md">
                  Choose Medium
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Pro</h4>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-600">
                    $900
                  </span>
                  <span className="text-gray-500">/year</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Everything in Medium</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      VIP access to all events
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      Direct leadership access
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      Annual recognition dinner
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      Tax-deductible certificate
                    </span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md">
                  Choose Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-xl text-gray-600">
              Together, we're making a real difference in communities worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                2,500+
              </div>
              <div className="text-gray-700 font-medium">
                Students Supported
              </div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                150+
              </div>
              <div className="text-gray-700 font-medium">
                Communities Reached
              </div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                50+
              </div>
              <div className="text-gray-700 font-medium">Programs Active</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
                10
              </div>
              <div className="text-gray-700 font-medium">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-700 text-white relative overflow-hidden">
        {/* Natural overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-36 h-36 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-16 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Whether you're looking to volunteer, donate, or partner with us,
            there are many ways to get involved and create positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Become a Volunteer
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition-all duration-200 transform hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">
                    Community Care Foundation
                  </h4>
                  <p className="text-sm text-gray-400">
                    test@test
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We are dedicated to improving lives through education,
                healthcare, and community development programs. Together, we
                build stronger, more resilient communities for a brighter
                future.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">
                    123 Community St, Hope City, HC 12345
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">(555) 123-HOPE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">info@hopefoundation.org</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Hope Foundation. All rights reserved. Making a
              difference, one community at a time.
            </p>
          </div>
        </div>
      </footer>

      {/* Student Portal Modal */}
      {showStudentPortal && (
        <StudentPortal onClose={() => setShowStudentPortal(false)} />
      )}
    </div>
  );
}

export default App;
