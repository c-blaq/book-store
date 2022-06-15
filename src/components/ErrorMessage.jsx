import React,{useEffect} from 'react'

const ErrorMessage = () => {
  return (
    useEffect(() => {
        const timer = setTimeout(() => {
          setError("Username or password is incorrect");
        }, 1000);
        return () => clearTimeout(timer)
      }, []);
  )
}

export default ErrorMessage