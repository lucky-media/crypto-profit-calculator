export default function Select({ options, onChange, name }) {
  return (
    <select onChange={onChange} className="bg-white rounded outline-none bg-opacity-70 focus:ring-2 focus:ring-purple-600" name={name} id={name}>
      {options.map((option, index) => {
        return <option key={index} value={option.value}>{option.label}</option>
      })}
    </select>
  )
}
