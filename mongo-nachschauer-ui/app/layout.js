import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import React from "react";
import MainNavbar from "./structs/mainNav";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "MongoDB Nachschauer",
    description: "Schaut Mongo Daten nach",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className='dark'>
        <body className={`h-screen ${inter.className}`}>
        <Providers>
            <MainNavbar/>
            {children}
        </Providers>
        </body>
        </html>
    );
}