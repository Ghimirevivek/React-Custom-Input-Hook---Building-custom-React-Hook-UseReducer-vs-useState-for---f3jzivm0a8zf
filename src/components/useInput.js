import { useState } from 'react'

//complete the input hook
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return {
    value,
    onChange: handleChange,
  }
}

export default useInput
