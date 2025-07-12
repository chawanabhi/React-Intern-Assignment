import React from "react";

interface TopToolbarProps {
  onSearch: (value: string) => void;
  onSortToggle: () => void;
}

export default function TopToolbar({ onSearch, onSortToggle }: TopToolbarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
      {/* Left: Workspace Info */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">Workspace ▸ Folder  ▸</span>
        <span className="text-sm font-semibold text-blue-800">
          Spreadsheet
        </span>
      </div>

      {/* Middle: Toolbar Buttons */}
      <div className="flex items-center gap-2">
        <button
          className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded border border-gray-300"
          onClick={onSortToggle}
        >
          Sort
        </button>

        {/* Placeholder for other buttons */}
        {["Filter", "Hide fields", "Extract"].map((btn) => (
          <button
            key={btn}
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded border border-gray-300"
            onClick={() => console.log(`${btn} clicked`)}
          >
            {btn}
          </button>
        ))}

        <button
          className="px-3 py-1 text-sm text-white bg-green-600 hover:bg-green-700 rounded"
          onClick={() => console.log("New Action clicked")}
        >
          New Action
        </button>
      </div>

      {/* Right: Search */}
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search within sheet"
          className="px-3 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="w-8 h-8 bg-gray-300 rounded-full" title="John Doe" />
      </div>
    </div>
  );
}
