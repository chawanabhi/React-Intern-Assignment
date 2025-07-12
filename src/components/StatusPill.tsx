import React from "react";
import clsx from "clsx";

type StatusPillProps = {
  status: "In-process" | "Complete" | "Blocked" | "Not started";
};

export default function StatusPill({ status }: StatusPillProps) {
  const colors = {
    "In-process": "bg-yellow-100 text-yellow-800",
    "Complete": "bg-green-100 text-green-800",
    "Blocked": "bg-red-100 text-red-800",
    "Not started": "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={clsx(
        "text-xs font-medium px-2 py-1 rounded-full",
        colors[status]
      )}
    >
      {status}
    </span>
  );
}
