import DisplayTable from "../tableContent";
import {columns} from "../columns";

export default function Home() {

    return (
        <div>
            <DisplayTable collection={'products'} columns={columns.products}></DisplayTable>
        </div>
    );
};
