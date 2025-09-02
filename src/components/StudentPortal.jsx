import React, { useState } from "react";
import {
  User,
  Upload,
  Camera,
  Save,
  LogOut,
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
} from "lucide-react";

export default function StudentPortal({ onClose }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ id: "", password: "" });
  const [student, setStudent] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Mock student data
  const mockStudent = {
    id: "STU001",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    studentId: "STU001",
    major: "Computer Science",
    year: "Junior",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication - in real app, this would call an API
    if (loginData.id && loginData.password) {
      setStudent(mockStudent);
      setIsLoggedIn(true);
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader();
        reader.onload = (event) => {
          setProfilePhoto(event.target?.result);
          setIsUploading(false);
        };
        reader.readAsDataURL(file);
      }, 1500);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setStudent(null);
    setProfilePhoto(null);
    setLoginData({ id: "", password: "" });
  };

  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <LogOut className="w-6 h-6" />
          </button>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Students Portal
            </h2>
            <p className="text-gray-600">
              Sign in to access your academic resources
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student ID
              </label>
              <input
                type="text"
                value={loginData.id}
                onChange={(e) =>
                  setLoginData({ ...loginData, id: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your student ID"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Welcome, {student?.name}</h2>
                <p className="text-blue-100">
                  Student ID: {student?.studentId}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Profile Section */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Profile
                </h3>

                {/* Profile Photo Upload */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      {profilePhoto ? (
                        <img
                          src={profilePhoto}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-12 h-12 text-gray-400" />
                      )}
                    </div>
                    <label className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full cursor-pointer transition-colors shadow-lg">
                      <Camera className="w-4 h-4" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                  {isUploading && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full animate-pulse"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Uploading...</p>
                    </div>
                  )}
                </div>

                {/* Student Info */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <p className="text-gray-900 font-medium">{student?.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <p className="text-gray-900">{student?.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Major
                    </label>
                    <p className="text-gray-900">{student?.major}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Year
                    </label>
                    <p className="text-gray-900">{student?.year}</p>
                  </div>
                </div>

                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Update Profile</span>
                </button>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="md:col-span-2">
              <div className="grid gap-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <Award className="w-8 h-8 text-green-600" />
                      <div>
                        <p className="text-2xl font-bold text-green-700">3.8</p>
                        <p className="text-sm text-green-600">GPA</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="text-2xl font-bold text-blue-700">12</p>
                        <p className="text-sm text-blue-600">Credits</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Recent Activities
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">
                        Scholarship application submitted
                      </span>
                      <span className="text-sm text-gray-500 ml-auto">
                        2 days ago
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">
                        Mentorship session completed
                      </span>
                      <span className="text-sm text-gray-500 ml-auto">
                        1 week ago
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">
                        Workshop registration opened
                      </span>
                      <span className="text-sm text-gray-500 ml-auto">
                        2 weeks ago
                      </span>
                    </div>
                  </div>
                </div>

                {/* Available Resources */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Available Resources
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left">
                      <BookOpen className="w-6 h-6 text-blue-600 mb-2" />
                      <p className="font-medium text-gray-900">
                        Study Materials
                      </p>
                      <p className="text-sm text-gray-600">
                        Access course resources
                      </p>
                    </button>
                    <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left">
                      <Award className="w-6 h-6 text-green-600 mb-2" />
                      <p className="font-medium text-gray-900">Scholarships</p>
                      <p className="text-sm text-gray-600">Apply for funding</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium transition-colors"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
}
