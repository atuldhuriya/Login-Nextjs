"use client"

const CreatePost = () => {
    

    const Check = () =>{

  
      
        fetch('https://jsonplaceholder.typicode.com/post', {
  method: 'POST',
  body: JSON.stringify({
    id: 1,
    title: 'atul',
    body: 'qwertyui',
    userId: 1,
    
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  
    }

  

    return (
        <div className='bg-gray-300 min-h-96 max-w-80 text-center mx-auto mt-5 rounded-lg'><br />
        <div className='mt-5'>
            <h1 className='text-3xl'>Login</h1><br />
            <input className="px-4 py-2"
                type="email"
                placeholder="Enter Email"
               
            />
            <br />
            <br />
            <input  className="px-4 py-2"
                type="password"
                placeholder="Enter Password"
               
            />
            <br />
            <br />
            <button type="button" onClick={Check} className="px-4 py-2 mt-3 bg-blue-500  text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600" >Sign Up</button>
            </div>
        </div>
    );
}


export default CreatePost;
