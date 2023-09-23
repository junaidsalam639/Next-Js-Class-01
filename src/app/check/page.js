import React from 'react'

const page = () => {
  return (
    <>
    <div>
      <div className='fixed w-full bg-indigo-950'>
      <h1 className='font-bold text-lime-50 text-center pt-4'>Home_Page</h1>
      <div className='border-b-4'></div>
      </div>

      <div className='container-fluid bg-indigo-900'>
      <div className='container h-screen pt-40'>
        <div className='row'>
            <div className='col-lg-6 mt-4'>
              <h1 className='font-bold text-lime-50'>Heading_1</h1>
              <h2 className='font-bold text-lime-50'>Heading_2</h2>
              <p className='font-bold text-lime-50'>Step 4: As of now bootstrap is successfully installed in React app but to use it we must import it inside React file. I am importing Bootstrap minified CSS file and Bootstrap JavaScript minified bundle file inside index.js which is in F:\gfg\src. </p>
              <button class="shadow-lg bg-slate-50 px-3 py-2 rounded-md">Subscribe</button>
            </div>
            <div className='col-lg-6 mt-4'>
              <img src='https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?b=1&s=170667a&w=0&k=20&c=AeBEFdsaJZmhbPHGocUkCutsQuR2rt828Aa8bDHyiOo=' alt='image' className='rounded-lg shadow-xl'></img>
            </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default page
