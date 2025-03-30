import './App.css'
import Content from "./Content.tsx";
import Nav from "./Nav.tsx";

function App() {

    return (
        <div className="h-screen w-screen  flex flex-col">
            <Nav/>
            <div className="flex flex-1 justify-center items-center">
                <Content/>
            </div>
            {/*<Footer/>*/}
        </div>
    )
}

export default App
