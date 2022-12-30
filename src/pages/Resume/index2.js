
import FlipCard from "../../components/FlipCard/FlipCard.js";

function Resume() {
  return (
    <div className="resume-container">
      <FlipCard/>
    </div>

  );
}
export default Resume;

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.scss";

// const cards = [
//     {
//       id: "1",
//       variant: "hover",
//       front: { title: "SKILLS" },
//       back: "Back"
//     },
//     {
//       id: "2",
//       variant: "click",
//       front: "Click",
//       back: "Back"
//     },
//     {
//       id: "3",
//       variant: "focus",
//       front: "Focus",
//       back: "Back"
//     }
//   ];
// export default function Resume() {
//   return (
//     <div className="container">
//       <div className="overlay-background" />
//       <div className="overlay-border" />
//       <div className="row h-100">
//         <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
//           {cards.map((card) => (
//             <FlipCard key={card.id} card={card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

