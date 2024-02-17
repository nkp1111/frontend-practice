import React from 'react'

export default function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 right-0 bg-custom-dark shadow-inner flex text-custom-light p-6 py-2 gap-4 items-center md:flex-row flex-col'>
      <div className='flex-1 justify-start flex gap-4 relative'>
        {/* footer logo */}
        <div className='font-bold items-center flex gap-1 text-lg ms-16'>B/D <span className='rounded-full border border-gray-50 aspect-square p-1 w-4 h-4 items-center font-mono text-xs inline-flex justify-center'>R</span></div>

        <p className='text-xs uppercase text-wrap lg:w-1/2 md:w-2/3 w-full'>This website uses cookies to ensure you <br />get the best experience. <a href="#" className='underline hover:no-underline'>Privacy policy</a></p>

        {/* settings  */}
        <div className='absolute left-0 -top-7 bottom-full w-14 h-14 aspect-square rounded-full bg-black p-2 fill-custom-light shadow-sm cursor-pointer tooltip' data-tip="Settings">
          <svg className='hover:scale-105 transition-all duration-300 ease-linear' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.9 2.999A1.9 1.9 0 1 1 12 1.1a1.9 1.9 0 0 1 1.9 1.899zM13.544 6h-3.088a1.855 1.855 0 0 0-1.8 1.405l-1.662 6.652a.667.667 0 0 0 .14.573.873.873 0 0 0 .665.33.718.718 0 0 0 .653-.445L10 9.1V13l-.922 9.219a.71.71 0 0 0 .707.781h.074a.69.69 0 0 0 .678-.563L12 14.583l1.463 7.854a.69.69 0 0 0 .678.563h.074a.71.71 0 0 0 .707-.781L14 13V9.1l1.548 5.415a.718.718 0 0 0 .653.444.873.873 0 0 0 .665-.329.667.667 0 0 0 .14-.573l-1.662-6.652A1.855 1.855 0 0 0 13.544 6z" /><path fill="none" d="M0 0h24v24H0z" /></svg>
        </div>
      </div>
      <div className="md:ms-auto md:justify-end justify-center gap-4 flex items-center">
        <button type="button" className={`btn relative rounded-full px-9 text-custom-light border border-custom-light py-1 btn-sm uppercase bg-transparent transition-all duration-300 ease-linear overflow-hidden
         before:bg-custom-light before:h-0 hover:before:h-full before:w-full before:absolute before:top-full hover:before:top-0 before:left-0 before:rounded-full before:transition-all before:duration-300 before:ease-linear before:text-custom-dark before:flex before:items-center before:justify-center hover:before:content-[var(--accept-cookie-text)]`}>Accept cookies</button>
        {/* footer close button  */}
        <button type="button" className='btn-circle'>&#10006;</button>
      </div>
    </footer>
  )
}
