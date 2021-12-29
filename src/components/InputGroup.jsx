export default function InputGroup({ label, valute, onChange, type = 'number', placeholder, name }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-white text-opacity-70">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="text-gray-900">
            {valute}
          </span>
        </div>
        <input
          id={name}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          type={type}
          className="block w-full pl-12 pr-12 bg-white rounded-md bg-opacity-70 focus:ring-2 focus:ring-purple-600"
        />
      </div>
    </div>
  )
}
