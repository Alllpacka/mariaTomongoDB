'use client'

import { useEffect, useState } from 'react';
import {Card, CardBody} from '@nextui-org/react';

export default function DataDisplayPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/mongodb');
            const db = await response.json();
            console.log('DB Response:', db); // Log the response to see what data is being returned
            const collection = db.collection('categories');
            const result = await collection.find({}).toArray();
            setData(result);
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Data Display</h1>
            {data.map((item, index) => (
                <Card key={index}>
                    <pre>{JSON.stringify(item)}</pre>
                </Card>
            ))}
        </div>
    );
}