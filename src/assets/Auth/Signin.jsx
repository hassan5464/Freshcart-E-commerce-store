import React ,{useState}from 'react'

export default function Signin () {


  const [show , setShow] = useState(false)



  return <>
     <div className='w-full h-[1000px]   absolute top-0 left-0 -translate-y-30 bg-[rgba(0,0,0,0.21)] flex items-center justify-center'> 
      <div className=' w-[400px] h-[450px] p-4 bg-white rounded-lg '>
        <div className='flex items-center justify-between mb-4'>
          <h3 className=' font-medium text-[24px] '>Sign In</h3>
          <button className='!bg-transparent !text-black cursor-pointer' onClick={() => setShow(true)}  type='button' >
                        <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>

          </button>
        </div>

        <form className="max-w-sm mx-auto flex flex-col items-stretch justify-center">
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-(--footer-color)">Your email</label>
              <input type="email" id="email" className=" border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5  focus:outline-[4px] focus:outline-(--secondary)  bg-white   placeholder:text-gray-400  " placeholder="name@gmail.com" required />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-(--footer-color)">Your password</label>
              <input type="password" id="password" className=" border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5   focus:outline-[4px] focus:outline-(--secondary) bg-white placeholder:text-gray-400  " placeholder="*******" required />
            </div>
          <button type="submit" className="text-white self-center w-1/3   font-medium rounded-lg text-sm   px-5 py-2.5 text-center mx-auto ">Submit</button>
        </form>

      </div>
    </div>


  </>
}
