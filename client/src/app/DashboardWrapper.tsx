'use client'

import { useEffect } from "react";
import StoreProvider, { useAppSelector } from "./redux";
import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    // Actualiza el modo oscuro/claro según el valor de `isDarkMode`
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]); // Dependencia añadida para que el efecto se actualice correctamente

    return (
        <div className={`${isDarkMode ? 'dark' : 'light'} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
            <Sidebar />

            <main className={`flex flex-col w-full h-full py-7 px-8 bg-gray-50 ${isSidebarCollapsed ? 'md:pl-24' : 'md:pl-72'}`}>
                <Navbar />
                {children}
            </main>
        </div>
    );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            <DashboardLayout>{children}</DashboardLayout>
        </StoreProvider>
    );
};

export default DashboardWrapper;
