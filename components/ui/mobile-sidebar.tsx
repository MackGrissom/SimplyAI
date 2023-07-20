"use client"

import { Menu } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import SideBar from "../sidebar";
import { useEffect, useState } from "react";

const MobileSideBar = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) {
        return null;
    }
    
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant='ghost' size='icon' className='md:hidden'>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className="p-0">
        <SideBar/>
            </SheetContent>
        </Sheet>
    );
}

export default MobileSideBar;