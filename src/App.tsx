import './App.css'
import Nav from "./Nav.tsx";
import Content from "./Content.tsx";
import Footer from "./Footer.tsx";

function App() {

  return (
    <div className="min-h-screen flex flex-col">
        <Nav/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default App
