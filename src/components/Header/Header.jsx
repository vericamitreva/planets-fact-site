import { useEffect, useState } from "react";
import "./header.css"
import MobileMenu from "./MobileMenu/MobileMenu"
import { IoMdMenu } from "react-icons/io";


export default function Header({onPlanetClick, activePlanetIndex, getActiveButtonColorClass }) {
    
    const [isMobileScreen, setIsMobileScreen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen((isMenuOpen) => !isMenuOpen)
    }

    const handleClick = (index) => {
        onPlanetClick(index)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth <= 768);
        }

        window.addEventListener("resize", handleResize);
        handleResize()

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header>
            <div className="header-container">
                <div className="header-container-wrapper">
                    <div className="header-logo">
                        <h2> THE PLANETS </h2>
                    </div>
                    {isMobileScreen ? (
                        <button className="mobile-menu-button" onClick={handleMobileMenuToggle}>
                            <IoMdMenu color={isMobileMenuOpen ? "grey" : "white"} size={30} />
                        </button>
                    ) : (
                        <div className="nav-menu">
                            <h4 className={`nav-button ${activePlanetIndex === 0 ? "active" : ""} ${getActiveButtonColorClass()}`} onClick={() => handleClick(0)}>MERCURY</h4>
                            <h4 className={`nav-button ${activePlanetIndex === 1 ? "active" : ""} ${getActiveButtonColorClass()}`} onClick={() => handleClick(1)}>VENUS</h4>
                            <h4 className={`nav-button ${activePlanetIndex === 2 ? "active" : ""} ${getActiveButtonColorClass()}`} onClick={() => handleClick(2)}>EARTH</h4>
                            <h4 className={`nav-button ${activePlanetIndex === 3 ? "active" : ""} ${getActiveButtonColorClass()}`} onClick={() => handleClick(3)}>MARS</h4>
                            <h4 className={`nav-button ${activePlanetIndex === 4 ? "active" : ""} ${getActiveButtonColorClass()}`} onClick={() => handleClick(4)}>JUPITER</h4>
                            <h4 className={`nav-button ${activePlanetIndex === 5 ? "active" : ""} ${getActiveButtonColorClass()}`} onClick={() => handleClick(5)}>SATURN</h4>
                            <h4 className={`nav-button ${activePlanetIndex === 6 ? "active" : ""} ${getActiveButtonColorClass()}`} onClick={() => handleClick(6)}>URANUS</h4>
                            <h4 className={`nav-button ${activePlanetIndex === 7 ? "active" : ""} ${getActiveButtonColorClass()}`} onClick={() => handleClick(7)}>NEPTUNE</h4>
                        </div>
                    )}
                </div>
                {isMobileMenuOpen && isMobileScreen && <MobileMenu onPlanetClick={handleClick} setIsMobileMenuOpen={handleMobileMenuToggle}/>}
            </div>
        </header>
    )
}