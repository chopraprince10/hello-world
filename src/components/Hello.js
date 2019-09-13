// This is Example of JSX
import React from 'react'

const Hello = () => {
    //// With JSX
//     return(
// <div>
//     <h1> Hello Prince </h1>
// </div>

//     );

//// Without USing JSX

return React.createElement('div', {id : 'hello', className : 'dummyClass'}, React.createElement('h1',null,'Hello Prince'))

}

export default Hello;