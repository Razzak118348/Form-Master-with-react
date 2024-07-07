import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue)

    // 1st way 
    // const handleChange = e => {
    //     setValue(e.target.value);
    // }

    // return [value, handleChange]

    // 2nd way //
    const onChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange
    }
}
export default useInputState;