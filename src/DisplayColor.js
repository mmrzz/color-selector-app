import { useRef, useEffect } from "react";

const DisplayColor = ({ color }) => {

    const textRef = useRef()

    useEffect(() => {
        if (textRef.current) {
        // Get background color of the element
        const bgColor = window.getComputedStyle(textRef.current).backgroundColor;

        // Convert RGB to array
        const rgb = bgColor.match(/\d+/g).map(Number);

        // Calculate brightness (WCAG formula)
        const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

        // Set text color based on brightness
        textRef.current.style.color = brightness > 128 ? "black" : "white";
        }
    }, [color]);

    const style = {
        backgroundColor: color ? color : "#ffffff"
    }

  return (
    <div 
        ref = {textRef}
        style = {style}
        className="display"
    >
        <p className="text">{!color ? "Empty value" : color }</p>
    </div>
  )
}

export default DisplayColor