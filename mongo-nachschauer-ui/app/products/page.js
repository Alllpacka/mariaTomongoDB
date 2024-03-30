import DisplayTable from "../structs/tableContent";
import {columns} from "../data/columns";

export default function Home() {

    return (
        <div>
            <DisplayTable collection={'products'} columns={columns.products}></DisplayTable>
        </div>
    );
};
