"use client";
import React, { useState } from "react";

const Feature = () => {
  const [activeTab, setActiveTab] = useState("developers");

  return (
    <div className="min-h-screen w-full ">
      
      <div className="container mx-auto px-4 py-6">
  
        <div className="flex justify-between items-center mb-8 bg-[#111111] p-4 rounded-xl border border-[#2A2A2A]">
         
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("developers")}
              className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeTab === "developers"
                  ? "bg-blue-600 text-white shadow-blue-500/20 shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-[#1A1A1A]"
              }`}
            >
              Developers
            </button>
            <button
              onClick={() => setActiveTab("maintainers")}
              className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeTab === "maintainers"
                  ? "bg-blue-600 text-white shadow-blue-500/20 shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-[#1A1A1A]"
              }`}
            >
              Maintainers
            </button>
          </div>

 
          <div className="flex items-center gap-3 bg-[#1A1A1A] px-4 py-2 rounded-lg border border-[#2A2A2A]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">
                {activeTab === "developers" ? "Development" : "Maintenance"}{" "}
                Mode
              </span>
            </div>
          </div>
        </div>

      
        <div className="bg-[#111111] rounded-2xl border border-[#2A2A2A] overflow-hidden">
          {/* Dashboard Header */}
          <div className="p-6 border-b border-[#2A2A2A] bg-[#141414]">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-white mb-1">
                  {activeTab === "developers"
                    ? "Developer Dashboard"
                    : "Maintainer Dashboard"}
                </h2>
                <p className="text-sm text-gray-400">
                  {activeTab === "developers"
                    ? "Real-time development metrics and project insights"
                    : "System monitoring and maintenance controls"}
                </p>
              </div>

         
              <div className="text-right">
                <div className="text-sm text-gray-400">Last Updated</div>
                <div className="text-sm font-medium text-gray-200">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>

  
          <div className="relative">
          
            <div className="w-full h-[650px] bg-[#0A0A0A] relative">
            
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10"></div>

              {activeTab === "developers" ? (
                <img
                  src="https://res.cloudinary.com/orrin/image/upload/v1730792329/WhatsApp_Image_2024-11-05_at_13.06.39_81b15994_xqq2bp.jpg"
                  alt="Developer Dashboard Interface"
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src="/api/placeholder/1600/900"
                  alt="Maintainer Dashboard Interface"
                  className="w-full h-full object-cover"
                />
              )}

     
            </div>
          </div>

 
          <div className="px-6 py-4 bg-[#141414] border-t border-[#2A2A2A]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-gray-400">
                    {activeTab === "developers"
                      ? "Developer View"
                      : "Maintainer View"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-xs">Refresh Rate: 60fps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
