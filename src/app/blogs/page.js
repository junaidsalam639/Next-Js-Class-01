'use client'
import { blog } from '../../../public/blog_detail/page'

const page = () => {
    const userData = (e) => {
        console.log(e);
        
    }
    return (
        <div>
            <h1 className='text-center py-4 text-5xl font-bold underline'>Blogs</h1>
            <div className='flex justify-around items-center flex-wrap w-100'>
                {
                    blog.map((user , index) => {
                        return (
                            <div className="card flex flex-col justify-center mt-5 shadow-lg p-3 rounded-md" style={{ width: '18rem' }}>
                                <img className="card-img-top rounded-lg" src={user.image} alt="Card image cap" style={{ width: '300px', height: '240px' }} />
                                <div className="card-body pt-5 text-center">
                                    <h5 className="card-title">Name : {user.name}<span> {user.issueDate}</span></h5>
                                    <h6>Class : {user.class}</h6>
                                    <h6>Timing : {user.timing}</h6>
                                    <button className='rounded-md py-2 px-3 mt-1 bg-blue-100 hover:bg-blue-200' onClick={() => userData(index)}>User_Data</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default page
