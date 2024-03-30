'use client'

import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Pagination} from '@nextui-org/react';
import React, {useEffect, useState} from "react";

export default function DisplayTable(props) {
    const {collection, columns} = props;
    const [data, setData] = useState([]);
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 25;

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const res = await fetch(`http://localhost:8000/${collection}`);
            const jsonData = await res.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const pages = Math.ceil(data.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return data.slice(start, end);
    }, [page, data]);

    const renderCell = React.useCallback((user, columnKey) => {
        return user[columnKey];
    }, []);

    return (
        <div className="flex w-full justify-center">
            <Table isStriped topContent={
                <div className="flex w-full justify-center">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            }>
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.name}>{column.name}</TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={"No data"} items={items}>
                    {(item) => (
                        <TableRow key={self.crypto.randomUUID()}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}