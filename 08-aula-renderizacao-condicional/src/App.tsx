import './App.css'
import { Dashboard } from './components/Dashboard'

function App() {

  return (
    <>
      <Dashboard usuario="João" />
      <Dashboard usuario={null} />
    </>
  )
}

export default App
