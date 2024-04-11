import './App.css'
import Header from './components/header/Header'
import MainView from './components/mainView/MainView'
function App() {
  return (
    <div className='appContainer'>
      <div className="mobileScreen">
        <Header />
        <MainView />
      </div>
    </div>
  )
}

export default App
