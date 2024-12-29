import "./Controls.css"

const Controls = ({incZoom, decZoom, handlePositionClick}) => {
    return(
        <div className="controls">
            <div className="zoom">
                <button className="zoom-plus" onClick={incZoom}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </button>
                <button className="zoom-minus" onClick={decZoom}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-minus"><path d="M5 12h14"/></svg>
                </button>
            </div>
            <div className="position">
                <button onClick={handlePositionClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-navigation"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                </button>
            </div>
        </div>
    )
}

export default Controls;