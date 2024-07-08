import PropTypes from 'prop-types';

const ReusableComponent = ({ handleSubmit, submitBtnText = 'Submit', children }) => {

    const handleEachForm = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.valuem,

            // object_name: e.target.[name of the inputfield ].value 
        }
        handleSubmit(data);
    }


    return (
        <div>{children}
            <form onSubmit={handleEachForm}>
                <input type="text" name="name" className="border-gray-50 border-2" />
                <br /> <br />
                <input type="email" name="email"  className="email border-gray-50 border-2" />
                <br /> <br />
                <input type="password" name="password"  className="phone border-gray-50 border-2" />
                <br /> <br />
                <input type="submit" value={submitBtnText} className="border-2 p-1 rounded-lg hover:cursor-pointer" />
            </form>
        </div>
    );
};

ReusableComponent.propTypes={
    handleSubmit:PropTypes.func,
    submitBtnText:PropTypes.string,
    children:PropTypes.object,
}

export default ReusableComponent;