'use client'
import Link from 'next/link';
import '../blogs.css'

export default function page({ params }) {
  let name = localStorage.getItem('name');
  let class1 = localStorage.getItem('class');
  let timing = localStorage.getItem('timing');
  let image = localStorage.getItem('image');
  let detail = localStorage.getItem('detail');
  console.log(name, class1, timing, image, detail);
  return (
    <div>
      <Link href={'/blogs'}>
      <button className='rounded-md py-2 px-3 shadow-lg border-2 ml-4 mt-4'> &lt; Back</button>
      </Link>
      <div className='flex justify-center items-center'>
        <div className='w-96'>
          <div className="mx-auto container card flex flex-col justify-center shadow-lg p-4 rounded-md" style={{ width: '100%' }}>
            <h1 className='text-xl text-center font-bold p-2'>User_Detail : {params.id}</h1>
            <img className="card-img-top rounded-lg" src={image} alt="Card image cap" style={{ width: '100%', height: '250px' }} />
            <div className="card-body pt-5">
              <h5 className="card-title"><b>Name : </b> {name}<span></span></h5>
              <h6><b>Class</b> : {class1}</h6>
              <h6><b>Timing</b> : {timing}</h6>
              <h6><b>Detail</b> : {detail}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// SEO stands for Search Engine Optimization. The goal of SEO is to create a strategy that will increase your rankings position in search engine results. The higher the ranking, the more organic traffic to your site, which ultimately leads to more business for you!
