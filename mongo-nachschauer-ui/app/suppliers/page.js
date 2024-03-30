import DisplayTable from "../structs/tableContent";
import {columns} from "../data/columns";

export default function Home() {

    return (
        <div>
            <DisplayTable collection={'suppliers'} columns={columns.suppliers}></DisplayTable>
        </div>
    );
};
