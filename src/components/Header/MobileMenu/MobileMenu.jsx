import "./mobileMenu.css"
import { IoIosArrowForward } from "react-icons/io"
import { FaCircle } from "react-icons/fa"


export default function MobileMenu({onPlanetClick, setIsMobileMenuOpen}) {

    const handlePlanetClick = (index) => {
        onPlanetClick(index)
        setIsMobileMenuOpen(false)
    }

    return (
        <div className="mobile-menu">
            <div className="mobile-menu-container-wrapper">
                <div className="mobile-menu-container">
                    <div className="mobile-menu-nav" onClick={() => handlePlanetClick(0)}>
                        <div className="mobile-menu-nav-planet">
                            <FaCircle color="#419EBB" size={20}/>
                            <h3>MERCURY</h3>
                        </div>
                        <IoIosArrowForward color="#838391"/>
                    </div>
                    <div className="mobile-menu-nav" onClick={() => handlePlanetClick(1)}>
                        <div className="mobile-menu-nav-planet">
                            <FaCircle color="#EDA249" size={20}/>
                            <h3>VENUS</h3>
                        </div>
                        <IoIosArrowForward color="#838391"/>
                    </div>
                    <div className="mobile-menu-nav" onClick={() => handlePlanetClick(2)}>
                        <div className="mobile-menu-nav-planet">
                            <FaCircle color="#6f2ed6" size={20}/>
                            <h3>EARTH</h3>
                        </div>
                        <IoIosArrowForward color="#838391"/>
                    </div>
                    <div className="mobile-menu-nav" onClick={() => handlePlanetClick(3)}>
                        <div className="mobile-menu-nav-planet">
                            <FaCircle color="#D14C32" size={20}/>
                            <h3>MARS</h3>
                        </div>
                        <IoIosArrowForward color="#838391"/>
                    </div>
                    <div className="mobile-menu-nav" onClick={() => handlePlanetClick(4)}>
                        <div className="mobile-menu-nav-planet">
                            <FaCircle color="#D83A34" size={20}/>
                            <h3>JUPITER</h3>
                        </div>
                        <IoIosArrowForward color="#838391"/>
                    </div>
                    <div className="mobile-menu-nav" onClick={() => handlePlanetClick(5)}>
                        <div className="mobile-menu-nav-planet">
                            <FaCircle color="#CD5120" size={20}/>
                            <h3>SATURN</h3>
                        </div>
                        <IoIosArrowForward color="#838391"/>
                    </div>
                    <div className="mobile-menu-nav" onClick={() => handlePlanetClick(6)}>
                        <div className="mobile-menu-nav-planet">
                            <FaCircle color="#1ec2a4" size={20}/>
                            <h3>URANUS</h3>
                        </div>
                        <IoIosArrowForward color="#838391"/>
                    </div>
                    <div className="mobile-menu-nav" style={{borderBottom: "none"}} onClick={() => handlePlanetClick(7)}>
                        <div className="mobile-menu-nav-planet">
                            <FaCircle color="#2d68f0" size={20}/>
                            <h3>NEPTUNE</h3>
                        </div>
                        <IoIosArrowForward color="#838391"/>
                    </div>
                </div>
            </div>
        </div>
    )
}