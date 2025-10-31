import React, { useState } from "react";

// Data array for the tabs
const tabData = [
  { id: "tab1", label: "High" },
  { id: "tab2", label: "Low" },
  { id: "tab3", label: "Balance" },
];

const Tab = () => {
  // State to track the active tab ID, initialized to the first tab
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    // Container with basic styling
    <div className="flex border-b border-gray-300 w-full max-w-md mx-auto mt-10 ">
      {tabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            flex-1 py-2 px-4 text-sm font-medium transition-colors duration-200 ease-in-out cursor-pointer
            
            ${
              activeTab === tab.id
                ? // Active Tab Classes: Blue underline and text
                  "border-b-2 border-indigo-500 text-indigo-600 font-bold"
                : // Inactive Tab Classes: Light text and subtle hover effect
                  "text-gray-500 hover:text-indigo-600 hover:bg-blue-950"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tab;
