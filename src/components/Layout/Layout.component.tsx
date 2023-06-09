import React, { useContext } from "react";
import Header from "../Header/Header.component";
import { ThemeContext } from "../../Theme/Theme";

function Layout(props: any) {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <div className="bg-secondary text-primary dark:bg-secondary-dark h-screen dark:text-primary-dark">
                <Header />
                <main className="m-24">
                    {props.children}
                </main>
            </div>
        </div>
    );
}

export default Layout;