'use client'

import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@nextui-org/react";
import {usePathname} from "next/navigation";

export default function MainNavbar() {
    const navbarItems = [
        {title: 'products', href: '/products'},
        {title: 'categories', href: '/categories'},
        {title: 'customers', href: '/customers'},
        {title: 'suppliers', href: '/suppliers'}
    ];

    const pathName = usePathname()

    const renderNavbarItems = () => {
        return navbarItems.map((item, index) => (
            <NavbarItem key={item.title}>
                <Link href={item.href}
                      className={`block w-full ${isActive(item.href) ? "font-bold text-blue-500" : ""}`}>
                    {item.title}
                </Link>
            </NavbarItem>

        ));
    };

    const isActive = (href) => pathName === href;

    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">mongo Nachschauer</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {renderNavbarItems()}
            </NavbarContent>
        </Navbar>
    )
}