const Header = () => {
    const logo = "Logo";
    const navbar = "Navbar";

    return (
        <header>
            <div className="logo">
                <p>{logo}</p>
            </div>
            <div className="navbar">
                <nav>{navbar}</nav>
            </div>
        </header>
    );
};

export default Header;