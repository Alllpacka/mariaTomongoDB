import DisplayTable from "../tableContent";
import {columns} from "../columns";

export default function Home() {

    return (
        <div>
            <DisplayTable collection={'categories'} columns={columns.categories}></DisplayTable>
        </div>
    );
};
