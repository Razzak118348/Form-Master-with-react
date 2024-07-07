import useInputState from "./useInputState";


const HookForm = () => {
// 1st way 
    // const [name,handleNameChange]=useInputState('razzak')

    // 2nd way //
    const namestate = useInputState('razzak')

    const handleSubmit = e=>{
        console.log('form data ',namestate.value)
        e.preventDefault();
    }
    return (
        <div>
              <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" className="border-gray-50 border-2" /> */}

                {/* 2nd way  */}
                <input {...namestate} type="text" name='name' className="email border-gray-50 border-2" />
                <br /> <br />
                <input type="email" name="email" id="" className="email border-gray-50 border-2" />
                <br /> <br />
                <input type="password" name="password" id="" className="phone border-gray-50 border-2" />
                <br /> <br />
                <input type="submit" value='Submit' className="border-2 p-1 rounded-lg hover:cursor-pointer" />
            </form>
        </div>
    );
};

export default HookForm;