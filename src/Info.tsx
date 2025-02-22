const Info = () => {
    return <div className="flex flex-col justify-between">
        <h1 id='engineer-name'
            className="text-2xl text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Paweł Oczadly
        </h1>
        <div>
            <h1 id='engineer-name'
                className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                Software Engineer
            </h1>
            <div>
                Java and Kotlin developer with some TypeScript and React expertise. Working in IT industry since 2017.
                Located in Poland - Kraków.
            </div>
        </div>
        <div className="flex justify-evenly mt-8 space-x-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                My LinkedIn
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                My GitHub
            </button>
        </div>
    </div>;
}

export default Info;