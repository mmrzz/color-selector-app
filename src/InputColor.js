const InputColor = ({color, setColor}) => {


  return (
    <form >
        <label htmlFor="add color">add color</label>
        <input 
        id="add color"
        type="text"
        className="input"
        placeholder='Add Color Name...'
        value={color}
        onChange={ (e) => setColor(e.target.value)}
        autoFocus
        required
        />
    </form>
    
  )
}

export default InputColor