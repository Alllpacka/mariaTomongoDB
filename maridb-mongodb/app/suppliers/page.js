import DisplayTable from "../tableContent";
import {columns} from "../columns";

export default function Home() {

    return (
        <div>
            <DisplayTable collection={'suppliers'} columns={columns.suppliers}></DisplayTable>
        </div>
    );
};
