import { useState } from "react";

const IndividualFormState = () => {
    //individual state 
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)
const [error ,setError] =useState('');

    const handleSubmit = e => {
        e.preventDefault();
       if(password.length < 6){
setError('Password must be 6 character or longer')
       } 
       else{
        setError('')
       }
        console.log(name, email, password);
    }

    const handleNameChange = e => {
        // console.log(e.target.value);
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleNameChange}
                    type="text" name="name" id="" className="border-gray-50 border-2" />
                <br /> <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name="email" id="" className="email border-gray-50 border-2" />
                <br /> <br />
                <input
                    onChange={handlePasswordChange}
                    type="password" name="password"  required id="" className="border-gray-50 border-2" />
                    {/* required mane holo na diye submit kora jabe na  */}
                <br /> <br /> 
                <input type="submit" value='Submit' className="border-2 p-1 rounded-lg hover:cursor-pointer" />

                {
                  error &&  <p>Error : Password must be 6 character!!</p>
                }
            </form>

        </div>
    );
};

export default IndividualFormState;