import React from "react";

const Navbar = () => {
    const styles = {
        primaryColor: '#4281A4', // Azzurro chiaro
        darkBackground: '#0F192E', // Colore scuro
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
        }
    };
    return (
        <>
            <nav style={{
                ...styles.container, position: 'fixed', top: 0, width: '1160px', backgroundColor: styles.darkBackground, zIndex: 999,
            }}
                className="fixed top-0 right-0 left-0 flex gap-4 border-b bg-color-secondary text-color-primary ">
                    <div className="flex flex-col align-centre" >
                        <h1>Aquatic Paradise</h1>
                    </div>
                <div className="flex flex-col align-centre text-color-primary font-bold">
                    <Link to="/">Home</Link>
                </div>
                <div className="flex flex-col align-centre text-color-primary font-bold">
                    <Link to="/login">Login</Link>
                </div>
                <div className="flex flex-col align-centre text-color-primary font-bold">
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
