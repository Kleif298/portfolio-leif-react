const Header = () => {
    return (
    <header>
        <div className="edge-mini-bar"></div>
        <div className="edge-content">
            <img src="%PUBLIC_URL%/sunrise-logo-grey.png" alt="sunrise-logo-grey" />
            <nav>
                <a href="#">Home</a>
                <a href="#about">About Me</a>
                <a href="#mywork">My Work</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </header>)
};

export default Header;