'use client'

export default function page({params}) {
  let name = localStorage.getItem('name');
  let class1 = localStorage.getItem('class');
  let timing = localStorage.getItem('timing');
  let image = localStorage.getItem('image');
  let detail = localStorage.getItem('detail');
  console.log(name);
  return (
    <div>
      <h1>Id : {params.id}</h1>
    </div>
  )
}


// SEO stands for Search Engine Optimization. The goal of SEO is to create a strategy that will increase your rankings position in search engine results. The higher the ranking, the more organic traffic to your site, which ultimately leads to more business for you!
