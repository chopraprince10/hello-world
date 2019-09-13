import React from "react";

//// Stateless Functional Componet Example : It is a simple javascript function which returns a JSX or HTML.
// function Greet(){
// return <h1>Hello Prince</h1>
// }

//// Re-write above function using arrow function syntax.
// OR
// const Greet = () => {
//     return <h1>Hello Prince</h1>
//     };

// export default Greet;

//// OR
//// In this type of export we use curly braces {} to import const
// export const Greet = props => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Hello {props.name}</h1>
//       {props.children}
//     </div>
//   );
// };




////Destructuring props and state
// export const Greet = ({name, heroName, children}) => {
//     return (
//       <div>
//         <h1>Hello {name} a.k.a {heroName}</h1>
//         {children}
//       </div>
//     );
//   };

//// ANOTHER WAY
export const Greet = props => {
  const{name, heroName, children} = props
  return (
    <div>
      <h1>Hello {name} a.k.a {heroName}</h1>
      {children}
    </div>
  );
};
