export default function Button({ children, onClick, className, ...props }) {
  return (
    <button className={`w-full py-4 text-white bg-purple-500 hover:bg-purple-900 ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
