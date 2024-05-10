import "./header.css"

export default function Header({onPlanetClick}) {
    const handleClick = (index) => {
        onPlanetClick(index)
    }

    return (
        <header>
            <div className="header-container">
                <div className="header-container-wrapper">
                    <div className="header-logo">
                        <h2> THE PLANETS </h2>
                    </div>
                    <div className="nav-menu">
                        <h4 onClick={() => handleClick(0)}>MERCURY</h4>
                        <h4 onClick={() => handleClick(1)}>VENUS</h4>
                        <h4 onClick={() => handleClick(2)}>EARTH</h4>
                        <h4 onClick={() => handleClick(3)}>MARS</h4>
                        <h4 onClick={() => handleClick(4)}>JUPITER</h4>
                        <h4 onClick={() => handleClick(5)}>SATURN</h4>
                        <h4 onClick={() => handleClick(6)}>URANUS</h4>
                        <h4 onClick={() => handleClick(7)}>NEPTUNE</h4>
                    </div>
                </div>
            </div>
        </header>
    )
}