import './App.css'
import { CakeView } from './features/cake/CakeViews'
import { IceCreamView } from './features/icecream/IceCreamViem'
import { UserView } from './features/user/UserView'
function App() {

  return (
    <div className="App">
     <CakeView />
     <IceCreamView />
     <UserView />
    </div>
  )
}

export default App
