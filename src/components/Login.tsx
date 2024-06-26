const Login = () =>{

    const insilization = async() =>{

        const apiRes = await fetch("localhost:3001/users/signup",{method:"POST",body:JSON.stringify ({
            "email":"Atul@gmail.com",
            "password":213456789
})})

        
        const responseData = await apiRes.json();
        console.log(responseData);
}
 return <button type="button" onClick={insilization}>login</button>

}
export default Login