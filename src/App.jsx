import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data';

export default function App() {
  const cards = data.map(card => {
    return <Card  title={card.title} rating={card.stats.rating} reviewCount={card.stats.reviewCount} country={card.location} price={card.price} img={card.coverImg} key={card.id} />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex"> {cards} </div>
    </div>
  )
}
