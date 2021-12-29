const Text = ({ children, className, center = false }) => {
  return <p className={`text-white text-opacity-70 ${center && 'text-center'} ${className}`}>{children}</p>
}

const Box = ({ children, label, type = "success" }) => {

  const styles = {
    success: 'bg-green-500',
    info: 'bg-pink-700'
  }

  return (
    <div>
      <p className='mb-2 text-white text-opacity-70'>{label}</p>
      <p className={`w-full p-4 text-center text-white ${styles[type]}`}>{children}</p>
    </div>
  )
}

export {
  Text,
  Box
}
