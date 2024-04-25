import './App.css'
import avatar from '../assets/images/image-avatar.webp'
import illustration from '../assets/images/illustration-article.svg'

function App() {

  return (
    <>
      <div className="bg-white rounded-2xl border-solid border-t-1 border-r-8 border-b-8 border-l-1 border-2 border-black p-4 w-96">
        <img src={illustration} alt="" className='w-full rounded-lg mx-auto' />

        <p className='font-bold p-2 my-1 w-max bg-amber-300'>Learning</p>

        <h4>Published 21 Dec 2023</h4>

        <h1 className='font-bold text-xl'>HTML & CSS foundations</h1>

        <p>These languages are the backbone of every website, defining structure, content, and presentation.
        </p>

        <div className="flex items-center">
          <img src={avatar} alt="avatar" className='w-8' />
          Greg Hooper
        </div>
      </div>


      {/* <div class="w-1/2">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </>
  )
}

export default App
