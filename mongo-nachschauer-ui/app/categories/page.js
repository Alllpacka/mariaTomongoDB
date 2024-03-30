import DisplayTable from "../structs/tableContent";
import {columns} from "../data/columns";

export default function Home() {

    return (
        <div>
            <DisplayTable collection={'categories'} columns={columns.categories}></DisplayTable>
        </div>
    );
};
