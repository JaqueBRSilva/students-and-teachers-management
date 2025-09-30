import './App.css'
import { SideMenu } from './components/sidemenu/SideMenu'

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