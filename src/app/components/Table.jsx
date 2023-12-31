import { useState } from "react";

import {
    useReactTable,
    getCoreRowModel, flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel
} from "@tanstack/react-table";

export const Table = ({ data, columns, filterBy }) => {

    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            globalFilter: filtering
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering
    });

    const onNextPage = () => {
        if (!table.getCanNextPage()) return;
        table.nextPage()
    }

    return (
        <>
            <div className="row justify-content-end mb-4">
                <div className="col-4">
                    <label htmlFor="search" className="form-label">
                        <i className="fas fa-search"></i>&nbsp;Filtrar:
                    </label>
                    <input
                        id="search"
                        className="form-control me-2"
                        type="search"
                        autoComplete="new-password"
                        value={filtering}
                        onChange={(e) => setFiltering(e.target.value)}
                        placeholder={filterBy} />
                </div>
            </div>
            <table className="table table-striped w-100">
                <thead>
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header => (
                                        <th
                                            onClick={header.column.getToggleSortingHandler()}
                                            scope="col"
                                            key={header.id}>
                                            <b> {header.column.columnDef.header} </b>
                                            {
                                                {
                                                    "asc": (<i className="fas fa-sort-up"></i>),
                                                    "desc": (<i className="fas fa-sort-down"></i>)
                                                }[header.column.getIsSorted() ?? null]
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {
                        table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {
                                    row.getVisibleCells().map((cell, index) => (
                                        <td key={index}>
                                            {
                                                flexRender(cell.column.columnDef.cell, cell.getContext())
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <ul className="pagination justify-content-center">
                    <li className="page-item text-primary">
                        <button
                            onClick={() => table.setPageIndex(0)}
                            className="page-link text-primary">
                            &laquo;
                        </button>
                    </li>
                    <li className="page-item text-primary">
                        <button
                            onClick={() => table.previousPage()}
                            className="page-link">
                            Anterior
                        </button>
                    </li>
                    <li className="page-item text-primary">
                        <button
                            onClick={onNextPage}
                            className="page-link">
                            Siguiente
                        </button>
                    </li>
                    <li className="page-item text-primary">
                        <button
                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                            className="page-link text-primary">
                            &raquo;
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}
