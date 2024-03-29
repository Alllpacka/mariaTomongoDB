import {Card, CardBody, Tab, Tabs} from "@nextui-org/react";
import React from "react";


export default function DescTabs() {
    let tabs = [{
        id: "products", label: "products", content: "products desc"
    }, {
        id: "categories", label: "categories", content: "categories desc"
    }, {
        id: "customers", label: "customers", content: "customers desc"
    }, {
        id: "suppliers", label: "suppliers", content: "suppliers desc"
    }];

    return (<div className="flex w-full flex-col">
        <Tabs items={tabs} variant={"bordered"}>
            {(item) => {
                console.log(item)
                return (<Tab key={item.id} title={item.label}>
                    <Card>
                        <CardBody>
                            {item.content}
                        </CardBody>
                    </Card>
                </Tab>)
            }}
        </Tabs>
    </div>);
}