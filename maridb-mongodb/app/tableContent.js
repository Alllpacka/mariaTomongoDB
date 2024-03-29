import React, {useMemo} from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue} from "@nextui-org/react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DBTable() {
    const [page, setPage] = React.useState(1);

    const {data, isLoading} = useSWR(`https://swapi.py4e.com/api/people?page=${page}`, fetcher, {
        keepPreviousData: true,
    });

    const rowsPerPage = 10;

    const pages = useMemo(() => {
        return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
    }, [data?.count, rowsPerPage]);

    const loadingState = isLoading || data?.results.length === 0 ? "loading" : "idle";

    const renderTableHeaders = () => {
        return tableHeaders.map((item) => (
          <TableColumn key={item}>{item}</TableColumn>
        ));
    }

    return (
        <Table
            aria-label="Example table with client async pagination"
            bottomContent={
                pages > 0 ? (
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
                ) : null
            }

        >
            <TableHeader>
                {renderTableHeaders}
            </TableHeader>
            <TableBody
                items={data?.results ?? []}
                loadingContent={<Spinner />}
                loadingState={loadingState}
            >
                {(item) => (
                    <TableRow key={item?.name}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}