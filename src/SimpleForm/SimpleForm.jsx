

const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log('form submited')

        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" className="border-gray-50 border-2" />
                <br /> <br />
                <input type="email" name="email" id="" className="email border-gray-50 border-2" />
                <br /> <br />
                <input type="number" name="phone" id="" className="phone border-gray-50 border-2" />
                <br /> <br />
                <input type="submit" value='Submit' className="border-2 p-1 rounded-lg hover:cursor-pointer" />
            </form>

        </div>
    );
};

export default SimpleForm;