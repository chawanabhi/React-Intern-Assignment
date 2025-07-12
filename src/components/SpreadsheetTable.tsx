// import React, { useMemo, useState } from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   getSortedRowModel,
//   flexRender,
//   type ColumnDef,
//   type SortingState,
//   getFilteredRowModel,
//   ColumnVisibility,
//   getPaginationRowModel,
// } from "@tanstack/react-table";
// import StatusPill from "./StatusPill";
// import PriorityLabel from "./PriorityLabel";
// import TopToolbar from "./TopToolbar";

// type RowData = {
//   name: string;
//   age: number;
//   department: string;
//   status: "In-process" | "Complete" | "Blocked" | "Not started";
//   submitter: string;
//   priority: "High" | "Medium" | "Low";
// };

// const baseData: RowData[] = [
//   {
//     name: "Alice",
//     age: 25,
//     department: "HR",
//     status: "In-process",
//     submitter: "Aisha Patel",
//     priority: "Medium",
//   },
//   {
//     name: "Bob",
//     age: 30,
//     department: "Engineering",
//     status: "Blocked",
//     submitter: "Mark Johnson",
//     priority: "High",
//   },
//   {
//     name: "Charlie",
//     age: 28,
//     department: "Design",
//     status: "Complete",
//     submitter: "Emma Watson",
//     priority: "Low",
//   },
// ];

// export default function SpreadsheetTable() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sorting, setSorting] = useState<SortingState>([]);
//   const [columnVisibility, setColumnVisibility] = useState({});

//   const filteredData = useMemo(() => {
//     return baseData.filter((row) =>
//       Object.values(row).some((value) =>
//         String(value).toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//   }, [searchQuery]);

//   const columns: ColumnDef<RowData>[] = [
//     { header: "Name", accessorKey: "name" },
//     { header: "Age", accessorKey: "age" },
//     { header: "Department", accessorKey: "department" },
//     {
//       header: "Status",
//       accessorKey: "status",
//       cell: (info) => <StatusPill status={info.getValue() as RowData["status"]} />,
//     },
//     { header: "Submitter", accessorKey: "submitter" },
//     {
//       header: "Priority",
//       accessorKey: "priority",
//       cell: (info) => <PriorityLabel level={info.getValue() as RowData["priority"]} />,
//     },
//   ];

//   const table = useReactTable({
//     data: filteredData,
//     columns,
//     state: {
//       sorting,
//       columnVisibility,
//     },
//     onSortingChange: setSorting,
//     onColumnVisibilityChange: setColumnVisibility,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     columnResizeMode: "onChange",
//   });

//   return (
//     <>
//       <TopToolbar
//         onSearch={setSearchQuery}
//         onSortToggle={() =>
//           setSorting((prev) =>
//             prev.length === 0
//               ? [{ id: "name", desc: false }]
//               : prev[0].desc
//               ? [{ id: "name", desc: false }]
//               : [{ id: "name", desc: true }]
//           )
//         }
//       />

//       {/* Toggle Column Visibility */}
//       <div className="flex gap-3 px-4 py-2">
//         {table.getAllColumns().map((column) => (
//           <label key={column.id} className="text-sm">
//             <input
//               type="checkbox"
//               checked={column.getIsVisible()}
//               onChange={column.getToggleVisibilityHandler()}
//               className="mr-1"
//             />
//             {column.id}
//           </label>
//         ))}
//       </div>

//       <div className="p-4 overflow-x-auto">
//         <table className="min-w-full border border-gray-300 text-sm">
//           <thead className="bg-gray-100">
//             {table.getHeaderGroups().map((headerGroup) => (
//               <tr key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => (
//                   <th
//                     key={header.id}
//                     className="border px-4 py-2 text-left font-semibold relative group"
//                     style={{ width: header.getSize() }}
//                   >
//                     <div
//                       {...{
//                         onClick: header.column.getToggleSortingHandler(),
//                       }}
//                     >
//                       {flexRender(header.column.columnDef.header, header.getContext())}
//                       {header.column.getIsSorted() === "asc"
//                         ? " 🔼"
//                         : header.column.getIsSorted() === "desc"
//                         ? " 🔽"
//                         : ""}
//                     </div>
//                     {header.column.getCanResize() && (
//                       <div
//                         onMouseDown={header.getResizeHandler()}
//                         className="absolute right-0 top-0 h-full w-1 cursor-col-resize bg-gray-300 opacity-0 group-hover:opacity-100"
//                       />
//                     )}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody>
//             {table.getRowModel().rows.map((row) => (
//               <tr key={row.id} className="hover:bg-gray-50">
//                 {row.getVisibleCells().map((cell) => (
//                   <td key={cell.id} className="border px-4 py-2">
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }
import React, { useMemo, useState, useRef, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import StatusPill from "./StatusPill";
import PriorityLabel from "./PriorityLabel";
import TopToolbar from "./TopToolbar";

type RowData = {
  name: string;
  age: number;
  department: string;
  status: "In-process" | "Complete" | "Blocked" | "Not started";
  submitter: string;
  priority: "High" | "Medium" | "Low";
};

const baseData: RowData[] = [
  {
    name: "Alice",
    age: 25,
    department: "HR",
    status: "In-process",
    submitter: "Aisha Patel",
    priority: "Medium",
  },
  {
    name: "Bob",
    age: 30,
    department: "Engineering",
    status: "Blocked",
    submitter: "Mark Johnson",
    priority: "High",
  },
  {
    name: "Charlie",
    age: 28,
    department: "Design",
    status: "Complete",
    submitter: "Emma Watson",
    priority: "Low",
  },
];

export default function SpreadsheetTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const tableRefs = useRef<(HTMLTableCellElement | null)[][]>([]);

  const filteredData = useMemo(() => {
    return baseData.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const columns: ColumnDef<RowData>[] = [
    { header: "Name", accessorKey: "name" },
    { header: "Age", accessorKey: "age" },
    { header: "Department", accessorKey: "department" },
    {
      header: "Status",
      accessorKey: "status",
      cell: (info) => (
        <StatusPill status={info.getValue() as RowData["status"]} />
      ),
    },
    { header: "Submitter", accessorKey: "submitter" },
    {
      header: "Priority",
      accessorKey: "priority",
      cell: (info) => (
        <PriorityLabel level={info.getValue() as RowData["priority"]} />
      ),
    },
  ];

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  // Setup refs matrix for arrow navigation
  const rows = table.getRowModel().rows;

  useEffect(() => {
    tableRefs.current = rows.map(() => new Array(columns.length).fill(null));
  }, [rows.length]);

  const handleKeyDown = (e: React.KeyboardEvent, rowIdx: number, colIdx: number) => {
    let newRow = rowIdx;
    let newCol = colIdx;

    switch (e.key) {
      case "ArrowDown":
        newRow = Math.min(rowIdx + 1, rows.length - 1);
        break;
      case "ArrowUp":
        newRow = Math.max(rowIdx - 1, 0);
        break;
      case "ArrowRight":
        newCol = Math.min(colIdx + 1, columns.length - 1);
        break;
      case "ArrowLeft":
        newCol = Math.max(colIdx - 1, 0);
        break;
      default:
        return;
    }

    e.preventDefault();
    const target = tableRefs.current[newRow][newCol];
    target?.focus();
  };

  return (
    <>
      <TopToolbar
        onSearch={setSearchQuery}
        onSortToggle={() =>
          setSorting((prev) =>
            prev.length === 0
              ? [{ id: "name", desc: false }]
              : prev[0].desc
              ? [{ id: "name", desc: false }]
              : [{ id: "name", desc: true }]
          )
        }
      />
      <div className="p-4 overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border px-4 py-2 text-left font-semibold cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() === "asc"
                      ? " 🔼"
                      : header.column.getIsSorted() === "desc"
                      ? " 🔽"
                      : ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell, colIdx) => (
                  <td
                    key={cell.id}
                    tabIndex={0}
                    ref={(el) => {
                      if (!tableRefs.current[rowIdx]) tableRefs.current[rowIdx] = [];
                      tableRefs.current[rowIdx][colIdx] = el;
                    }}
                    onKeyDown={(e) => handleKeyDown(e, rowIdx, colIdx)}
                    className="border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
