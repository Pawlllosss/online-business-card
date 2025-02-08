import Info from "./Info.tsx";

const Content = () => {
    return <div className="h-screen flex items-center justify-center">
        <div className="flex h-[60vh]">
            <div className="flex flex-row justify-evenly items-center w-full">
                <Info/>
                <img src="https://oczadly-business-card.s3.amazonaws.com/oczadly-pic.jpg"
                     className="flex-1 p-4 w-full h-full object-cover rounded-lg shadow-ls"/>
            </div>
        </div>
    </div>
}

export default Content;