const Loader = () => {
  const circleCommonClasses = 'h-5 w-5 rounded-full'

  return (
    <div className="flex">
      <div
        className={`${circleCommonClasses} bg-red300 mr-2 animate-bounce`}></div>
      <div
        className={`${circleCommonClasses} bg-yellow300 mr-2 animate-bounce200`}></div>
      <div
        className={`${circleCommonClasses} bg-green300 animate-bounce400`}></div>
    </div>
  )
}

export default Loader
