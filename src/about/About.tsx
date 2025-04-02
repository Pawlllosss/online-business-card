import ExperienceTile from "./ExperienceTile.tsx";

const About = () => {
    return <div className="flex flex-1 h-[60vh] flex-col space-x-20">
        {/*items-center justify-center*/}
        <h1>Work Experience</h1>
        <ExperienceTile jobTitle="Senior Software Engineer" companyName="Tesco" jobStart={new Date(2024, 11)}/>
        <ExperienceTile jobTitle="Software Engineer" companyName="Appliscale" jobStart={new Date(2019, 12)}
                        jobEnd={new Date(2024, 11)}/>
        <ExperienceTile jobTitle="Java developer" companyName="Comarch" jobStart={new Date(2019, 3)}
                        jobEnd={new Date(2019, 12)}/>
        <ExperienceTile jobTitle="Telecom Software Tester - Working Student" companyName="Nokia"
                        jobStart={new Date(2018, 6)}
                        jobEnd={new Date(2019, 3)}/>
        <ExperienceTile jobTitle="Cloud Services Intern" companyName="Aptiv"
                        jobStart={new Date(2017, 12)}
                        jobEnd={new Date(2018, 2)}/>
    </div>
}

export default About;