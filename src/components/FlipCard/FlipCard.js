
import "./style.css";


function FlipCard() {
  return (
    <div className="flip-card-container">


      </div>
  );
}

export default FlipCard;







// import { useState } from "react";
// import cn from "classnames";

// function FlipCard({ card: { id, variant, front, back } }) {
//   const [showBack, setShowBack] = useState(false);

//   function handleClick() {
//     if (variant === "click") {
//       setShowBack(!showBack);
//     }
//   }

//   function handleFocus() { 
//     if (variant === "focus") { 
//       setShowBack(true); 
//     } 
//   } 

//   function handleBlur() { 
//     if (variant === "focus") { 
//       setShowBack(false); 
//     } 
//   } 

//   return (
// //     <div
// //       tabIndex={id} 
// //       className={cn("flip-card-outer", { 
// //         "focus-trigger": variant === "focus" 
// //       })} 
// //       onClick={handleClick}
// //       onFocus={handleFocus} 
// //       onBlur={handleBlur} 
// //     >
// //       <div
// //         className={cn("flip-card-inner", {
// //           showBack,
// //           "hover-trigger": variant === "hover"
// //         })}
// //       >
// //         <div className="card front">
// //           <div className="card-body d-flex justify-content-center align-items-center">
// //             <p className="card-text fs-1 fw-bold">{front}</p>
// //           </div>
// //         </div>
// //         <div className="card back">
// //           <div className="card-body d-flex justify-content-center align-items-center">
// //             <p className="card-text fs-1 fw-bold">{back}</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
//   );
// }

// export default FlipCard;