import React from 'react';

const ErrorFallback =({error})=>{
  console.info(error,"error");

  return <p>Something went wrong</p>
};

export default ErrorFallback;