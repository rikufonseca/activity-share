export default function Hero() {
  return (
    <div className="grid">
      <div className="col-one">
        <img src="./src/assets/pic-one.jpg" height="200px" width="133px"/>
      </div>
      <div className="col-two">
        <img src="./src/assets/pic-two.jpg" height="200px" width="133px" className="align"/>
        <img src="./src/assets/pic-three.jpg" height="200px" width="133px" className="align"/>
      </div>
      <div className="col-three">
        <img src="./src/assets/pic-four.jpg" height="200px" width="133px" className="align"/>
        <img src="./src/assets/pic-five.jpg" height="200px" width="133px" className="align"/>
      </div>
      <div className="col-four">
        <img src="./src/assets/pic-six.jpg" height="200px" width="133px" className="align"/>
        <img src="./src/assets/pic-seven.jpg" height="200px" width="133px" className="align"/>
      </div>
      <div className="col-five">
        <img src="./src/assets/pic-nine.jpg" height="200px" width="133px" className="align"/>
        <img src="./src/assets/pic-eight.jpg" height="200px" width="133px" className="align"/>
      </div>
    </div>
  )
}
