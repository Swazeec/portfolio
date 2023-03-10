import { useState } from "react"

const useForm = (validate) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    let isValid = validate(enteredValue)
    let hasError = !isValid && isTouched

    const onChangeHandler = e =>{
        setEnteredValue(e.target.value)
    }

    const onBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue, 
        isValid,
        hasError, 
        onChangeHandler,
        onBlurHandler,
        reset
    }
}

export default useForm