import './App.css'
import Content from "./Content.tsx";
import Nav from "./Nav.tsx";

function App() {

    return (
        <div className="h-screen w-screen  flex flex-col">
            <Nav/>
            <Content/>
            {/*<Footer/>*/}
        </div>
    )
}

export default App
