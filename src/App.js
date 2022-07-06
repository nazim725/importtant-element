import logo from './logo.svg'
import './App.css'
import Card from './Components/Card/Card'
import Graph from './Components/Graph/Graph'
import Barchat from './Components/Barchat/Barchat'
import ApexAreaChart from './Components/ApexChart/ApexChart'
import ApexLineChart from './Components/ApexLineChart/ApexLineChart'
import Marque from './Components/Marque/Marque'
import TeamCard from './Components/TeamCard/TeamCard'
import Animatedbanner from './Components/Animatedbanner/Animatedbanner'

function App() {
  return (
    <div className="App">
      <Card />
      <Graph />
      <Barchat />
      <ApexAreaChart />
      <ApexLineChart />
      <Marque />

      <br />
      <TeamCard />

      <br />
      <Animatedbanner />
    </div>
  )
}

export default App
