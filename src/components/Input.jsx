export default function Input({ label, name, type = 'text', onChange }) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-white text-opacity-70" htmlFor={name}>{label}</label>
      <input onChange={onChange} id={name} name={name} type={type} className="bg-white rounded outline-none bg-opacity-70 focus:ring-2 focus:ring-purple-600" />
    </div>
  )
}
