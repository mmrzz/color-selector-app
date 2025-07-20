const InputColor = ({color, setColor}) => {


  return (
    <input 
    type="text"
    className="input"
    placeholder='Add Color Name...'
    value={color}
    onChange={ (e) => setColor(e.target.value)} />
  )
}

export default InputColor