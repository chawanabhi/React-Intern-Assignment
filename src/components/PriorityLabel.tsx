import React from "react";
import clsx from "clsx";

type PriorityProps = {
  level: "High" | "Medium" | "Low";
};

export default function PriorityLabel({ level }: PriorityProps) {
  const styles = {
    High: "text-red-600 font-semibold",
    Medium: "text-yellow-600 font-semibold",
    Low: "text-blue-600 font-semibold",
  };

  return <span className={clsx("text-sm", styles[level])}>{level}</span>;
}
