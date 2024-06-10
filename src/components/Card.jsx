export default function Card() {
  return (
    <div className="container">
      <div className="container--image">
        <p className="box--top-left font">SOLD OUT</p>
        <img src="./src/assets/swimmer.jpg" height="335px" width="200px" alt="image of swimmer"/>
      </div>
      <div className="container--text">
        <div className="flex">
          <img src="./src/assets/star-icon.png" height="15px" width="15px" className="margin-0" alt="star icon"/>
          <p className="rating margin-0"> 5.0 (6) . USA </p>
        </div>
        <p className="margin-5"> Life lessons with Karl Zaferes </p>
        <p className="margin-5"> <span className="bold">From $136 </span>/ person </p>
      </div>
    </div>
  )
}
