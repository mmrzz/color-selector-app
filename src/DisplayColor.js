const DisplayColor = ({ color }) => {

    const style = {
        backgroundColor: `${color}`
    }

  return (
    <div 
        style = {style}
        className="display"
    >
        <p>{!color ? "Empty value" : color }</p>
    </div>
  )
}

export default DisplayColor