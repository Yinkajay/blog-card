import './App.css'
import avatar from '../assets/images/image-avatar.webp'
import illustration from '../assets/images/illustration-article.svg'

function App() {

  return (
    <>
      <div className=" rounded-2xl border-solid border-t-1 border-r-8 border-b-8 border-l-1 border-2 border-black p-4 w-80 sm:w-96  bg-white ">
        <img src={illustration} alt="" className='w-full rounded-lg mx-auto' />

        <p className='rounded-sm font-bold py-1 px-3 my-4 my-1 w-max bg-yellow'>Learning</p>

        <h4 className=''>Published 21 Dec 2023</h4>

        <h1 className='font-bold text-xl my-2'>HTML & CSS foundations</h1>

        <p className='text-grey font-mono'>These languages are the backbone of every website, defining structure, content, and presentation.
        </p>

        <div className="flex items-center mt-6">
          <img src={avatar} alt="avatar" className='w-8' />
          <p className=' ml-4 font-bold text-sm'>Greg Hooper</p>
        </div>
      </div>


      {/* <div className="w-1/2">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </>
  )
}

export default App
