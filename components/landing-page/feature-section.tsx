"use client";
import React, { useState, useEffect } from "react";

const Feature = () => {
  const [activeTab, setActiveTab] = useState("developers");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Format date on client-side only
    setFormattedDate(
      new Date().toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })
    );
  }, []);

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8 bg-[#020617] p-4 rounded-xl border border-[#2A2A2A]">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("developers")}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeTab === "developers"
                  ? "bg-green-600 text-white shadow-green-500/20 shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-[#1A1A1A]"
              }`}
            >
              Developers
            </button>
            <button
              onClick={() => setActiveTab("maintainers")}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeTab === "maintainers"
                  ? "bg-green-600 text-white shadow-green-500/20 shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-[#1A1A1A]"
              }`}
            >
              Maintainers
            </button>
          </div>

          <div className="flex items-center gap-3 bg-[#1A1A1A] px-4 py-2 rounded-lg border border-[#2A2A2A] w-full sm:w-auto">
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
          <div className="p-4 sm:p-6 border-b border-[#2A2A2A] bg-[#020617]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  {activeTab === "developers"
                    ? "Developer Dashboard"
                    : "Maintainer Dashboard"}
                </h2>
                <p className="text-xs sm:text-sm text-gray-400">
                  {activeTab === "developers"
                    ? "Real-time development metrics and project insights"
                    : "System monitoring and maintenance controls"}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <div className="text-xs sm:text-sm text-gray-400">
                  Last Updated
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-200">
                  {formattedDate}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] bg-[#0A0A0A] relative">
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

          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-[#020617] border-t border-[#2A2A2A]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-400">
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
