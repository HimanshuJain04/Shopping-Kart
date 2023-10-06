import error from "../assets/error.jpg"

function ErrorPage() {
  return (
    <div className='w-[100vw] h-[100vh] z-[100] relative flex  justify-center items-center'>


      <img src={error} alt="Error Page" className="h-[70%]" />

    </div>
  )
}

export default ErrorPage
