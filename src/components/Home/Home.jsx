import './home.css'
import Header from "../Header/Header.jsx"
import data from "../../data/data.js"
import IconSource from "../assets/assets.js"
import { useState, useEffect } from 'react'

export default function Home() {
    const [selectedPlanet, setSelectedPlanet] = useState(data[0])
    const [activeSection, setActiveSection] = useState("overview")
    const [activePlanetIndex, setActivePlanetIndex] = useState(0)
    const [isMobileScreen, setIsMobileScreen] = useState(false)

    const handlePlanetClick = (index) => {
        setSelectedPlanet(data[index])
        setActivePlanetIndex(index)
        setActiveSection("overview")
    }

    const handleActiveSection = (section) => {
        setActiveSection(section)
    }

    const getActiveButtonColorClass = () => {
        switch (activePlanetIndex) {
            case 0:
                return "mercury"
                
            case 1:
                return "venus"

            case 2:
                return "earth"
                
            case 3:
                return "mars"

            case 4:
                return "jupiter"
                
            case 5:
                return "saturn"

            case 6:
                return "uranus"
                
            case 7:
                return "neptune"

            default:
                return ""
        }
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
        <home>
            <div className='home-container'>
                <Header 
                    onPlanetClick={handlePlanetClick}
                    activePlanetIndex={activePlanetIndex}
                    getActiveButtonColorClass={getActiveButtonColorClass}/>
                <div className='home-container-wrapper'>
                    <div className='home-container-content'>
                        {isMobileScreen && (
                            <div className='mobile-buttons'>
                                <h4 className={`mobile-button ${activeSection === "overview" ? "active" : ""} ${getActiveButtonColorClass()}`}   onClick={()=>handleActiveSection("overview")}>OVERVIEW</h4>
                                <h4 className={`mobile-button ${activeSection === "structure" ? "active" : ""} ${getActiveButtonColorClass()}`} onClick={()=>handleActiveSection("structure")}>STRUCTURE</h4>
                                <h4 className={`mobile-button ${activeSection === "geology" ? "active" : ""} ${getActiveButtonColorClass()}`} onClick={()=>handleActiveSection("geology")}>SURFACE</h4>
                            </div>
                        )}
                        <div className='planet-image-info'>
                            <div className='planet-image'>
                            {activeSection === "overview" && (
                                <>
                                    <img src={selectedPlanet.images.planet} alt={selectedPlanet.name}></img>
                                </>
                            )}
                            {activeSection === "structure" && (
                                <>
                                    <img src={selectedPlanet.images.internal} alt={selectedPlanet.name}></img>
                                </>
                            )}
                            {activeSection === "geology" && (
                                <>
                                    <img src={selectedPlanet.images.planet} alt={selectedPlanet.name}></img>
                                    <img src={selectedPlanet.images.geology} alt={selectedPlanet.name} className='geology-pin'></img>
                                </>
                            )}
                            </div>
                            <div className='planet-info'>
                                <div className='info'>
                                    <h1>{selectedPlanet.name}</h1>
                                    {activeSection === "overview" && (
                                        <>
                                            <p>{selectedPlanet.overview.content}</p>
                                            <p style={{color:"#838391"}}>Source : <a href={selectedPlanet.overview.source} target="_blank" rel="noopener noreferrer">Wikipedia<span><IconSource/></span></a></p>
                                        </>
                                    )}
                                    {activeSection === "structure" && (
                                        <>
                                            <p>{selectedPlanet.structure.content}</p>
                                            <p style={{color:"#838391"}}>Source : <a href={selectedPlanet.structure.source} target="_blank" rel="noopener noreferrer">Wikipedia<span><IconSource/></span></a></p>
                                        </>
                                    )}
                                    {activeSection === "geology" && (
                                        <>
                                            <p>{selectedPlanet.geology.content}</p>
                                            <p style={{color:"#838391"}}>Source : <a href={selectedPlanet.geology.source} target="_blank" rel="noopener noreferrer">Wikipedia<span><IconSource/></span></a></p>
                                        </>
                                    )}
                                </div>
                                <div className='buttons'>
                                    <button className={`button ${activeSection === "overview" ? "active" : ""} ${getActiveButtonColorClass()}`}   onClick={()=>handleActiveSection("overview")}>
                                            <div className='button-number'>
                                                <h3>01</h3>
                                            </div>
                                            <div>
                                                <h3>OVERVIEW</h3>
                                            </div>
                                    </button>
                                    <button className={`button ${activeSection === "structure" ? "active" : ""} ${getActiveButtonColorClass()}`} onClick={()=>handleActiveSection("structure")}>
                                            <div className='button-number'>
                                                <h3>02</h3>
                                            </div>
                                            <div>
                                                <h3>INTERNAL STRUCTURE</h3>
                                            </div>
                                    </button>
                                    <button className={`button ${activeSection === "geology" ? "active" : ""} ${getActiveButtonColorClass()}`} onClick={()=>handleActiveSection("geology")}>
                                            <div className='button-number'>
                                                <h3>03</h3>
                                            </div>
                                            <div>
                                                <h3>SURFACE GEOLOGY</h3>
                                            </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='planet-characteristics'>
                            <div className='characteristics'>
                                <h3>ROTATION TIME</h3>
                                <h2>{selectedPlanet.rotation}</h2>
                            </div>
                            <div className='characteristics'>
                                <h3>REVOLUTION TIME</h3>
                                <h2>{selectedPlanet.revolution}</h2>
                            </div>
                            <div className='characteristics'>
                                <h3>RADIUS</h3>
                                <h2>{selectedPlanet.radius}</h2>
                            </div>
                            <div className='characteristics'>
                                <h3>AVERAGE TEMP.</h3>
                                <h2>{selectedPlanet.temperature}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </home>
    )
}