import  Link  from 'next/link'

const Notfoundpage = () => {
  return (
    <div
    
        className='min-h-screen  
        mg-4 
        bg-cover 
        bg-center 
        flex 
        items-center 
        w-full 
        px-3
        overflow-hidden
        ' 
        style={{backgroundImage: `url('/R_labpic_3.jpg')`}} 
        id='Header'>
        
        <h2 className='mx-auto my-auto'>This page is NOT FOUND</h2>
    <Link href ={"/"}><button className='bg-gray-400'>Go Back Home</button></Link>
    </div>
  )
}

export default Notfoundpage