import { useEffect, useRef } from "react";


const RefForm = () => {
const nameRef = useRef(null);
const emailRef = useRef(null)
const passwordRef = useRef(null)

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value)

    }

    // for focuse in name input section 
    useEffect(()=>{
        nameRef.current.focus();
    },[])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" id="" className="border-gray-50 border-2 p-1" />
                <br /> <br />
                <input ref={emailRef} type="email" name="email"  defaultValue='razzak11@gmail.com' id="" className="email border-gray-50 border-2 p-1 " />
                <br /> <br />
                <input ref={passwordRef} type="password" name="password" id="" className="phone p-1  border-gray-50 border-2" />
                <br /> <br />
                <input  type="submit" value='Submit' className="border-2 p-1 rounded-lg hover:cursor-pointer" />
            </form> 
        </div>
    );
};

export default RefForm;