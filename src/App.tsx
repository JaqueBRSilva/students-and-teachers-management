import './App.css'
import { SideMenu } from './components/Sidemenu/SideMenu'

function App({ children }: { children?: React.ReactNode }) {

  return (
    <div className="app-container">
      <SideMenu />

      <main className="main-content">
        {children}
      </main>
    </div>
  )
}

export default App