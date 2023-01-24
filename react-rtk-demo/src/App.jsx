import './App.css'
import { CakeView } from './features/cake/CakeViews'
import { IceCreamView } from './features/icecream/IceCreamViem'
import { UserView } from './features/user/UserView'
function App() {

  return (
    <div className="App">
      <h1>Olá mundo</h1>
     <CakeView />
     <IceCreamView />
     <UserView />
    </div>
  )
}

export default App
