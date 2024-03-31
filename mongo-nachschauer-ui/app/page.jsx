'use client';

import React from "react";
import {Divider} from "@nextui-org/react";

export default function Home() {
    return (
        <div className="max-w-fit flex-auto absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="space-y-4">
                <h4 className="font-mono text-8xl">Mongo Nachschauer</h4>
                <p className="text-6xl text-default-400">WebUI für MongoDB Daten</p>
            </div>
            <Divider className="my-4 bg-pink-600"/>
            <div className="flex h-5 items-center space-x-4 text-4xl">
                <div className="text-pink-400">
                    <a href="http://localhost:8000/docs">Docs</a>
                </div>
                <Divider orientation="vertical" className="bg-pink-600"/>
                <div className="text-pink-400">
                    <a href="https://github.com/Alllpacka/mariaTomongoDB">Source</a>
                </div>
            </div>
        </div>
    )
}
