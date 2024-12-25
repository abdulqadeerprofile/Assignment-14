import React from 'react';
import { MapPin, Phone, Globe, Building2, Mail } from 'lucide-react';

const UserProfile = async(props:any) => {
  const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`)
  const userData = await url.json()

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              {userData.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
              <p className="text-gray-600">@{userData.username}</p>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 space-y-6">
          {/* Contact Information */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-800">Contact Information</h2>
            <div className="grid gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">{userData.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">{userData.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-gray-500" />
                <a href={`https://${userData.website}`} className="text-blue-500 hover:underline">
                  {userData.website}
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-800">Address</h2>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-500 mt-1" />
              <div>
                <p className="text-gray-600">{userData.address.street}</p>
                <p className="text-gray-600">{userData.address.suite}</p>
                <p className="text-gray-600">{userData.address.city}, {userData.address.zipcode}</p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-800">Company</h2>
            <div className="flex items-start space-x-3">
              <Building2 className="h-5 w-5 text-gray-500 mt-1" />
              <div>
                <p className="text-gray-800 font-medium">{userData.company.name}</p>
                <p className="text-gray-600 italic">{userData.company.catchPhrase}</p>
                <p className="text-gray-600">{userData.company.bs}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;