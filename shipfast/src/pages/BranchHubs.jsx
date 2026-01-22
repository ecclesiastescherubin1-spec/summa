import React from "react";

export default function BranchHubManagement() {
  return (
    <div className="min-h-screen bg-[#f4f7ff] font-sans">
      {/* Top Navbar */}
      <div className="bg-white border-b flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-10">
          <div className="text-2xl font-bold text-purple-600">ShipFast</div>
          <div className="flex gap-6 text-gray-600">
            <span>Overview</span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-xl">Branches & Hubs</span>
            <span>Pricing</span>
            <span>Fleet</span>
            <span>Staff</span>
            <span>Performance</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="border rounded-xl px-4 py-2 flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <div className="text-sm">
              <div className="font-semibold">Admin User</div>
              <div className="text-green-500 text-xs">Administrator</div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="px-10 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Branch & Hub Management</h1>
            <p className="text-gray-500">Manage branch locations and hub hierarchy</p>
          </div>
          <button className="bg-[#0b1220] text-white px-5 py-3 rounded-xl">
            Add New Branch
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border">
            <p className="text-gray-500">Total Branches</p>
            <h2 className="text-2xl font-bold mt-2">45</h2>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <p className="text-gray-500">Regional Hubs</p>
            <h2 className="text-2xl font-bold mt-2">8</h2>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <p className="text-gray-500">Coverage Cities</p>
            <h2 className="text-2xl font-bold mt-2">120+</h2>
          </div>
        </div>

        {/* Branch List */}
        <div className="bg-white rounded-xl border">
          {/* Search */}
          <div className="flex justify-between p-4 border-b">
            <input
              type="text"
              placeholder="Search branches..."
              className="border rounded-lg px-4 py-2 w-2/3"
            />
            <select className="border rounded-lg px-4 py-2">
              <option>All States</option>
            </select>
          </div>

          {/* Rows */}
          {[
            {
              name: "Mumbai Central Hub",
              location: "Maharashtra",
              staff: "45 staff members",
              type: "Hub",
            },
            {
              name: "Mumbai Andheri Branch",
              location: "Maharashtra",
              staff: "12 staff members",
              type: "Branch",
            },
            {
              name: "Delhi NCR Hub",
              location: "Delhi",
              staff: "38 staff members",
              type: "Hub",
            },
            {
              name: "Bangalore Tech Park",
              location: "Karnataka",
              staff: "18 staff members",
              type: "Branch",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-6 py-5 border-b last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg font-bold">
                  🏢
                </div>
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-500">
                    {item.location} • {item.staff}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    item.type === "Hub"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {item.type}
                </span>
                <button className="text-blue-600 font-medium">Manage</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
