import DisplayTable from "../tableContent";
import {columns} from "../columns";

export default function Home() {

    return (
        <div>
            <DisplayTable collection={'customers'} columns={columns.customers}></DisplayTable>
        </div>
    );
};
