import ExperienceTile from "./ExperienceTile.tsx";

const About = () => {
    return <div className="flex h-[60vh] flex-col">
        <h1 className="text-center">Work Experience</h1>
        <div className="flex justify-center">
            <div className="flex w-1/3 flex-col space-y-20 items-start mt-6">
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
        </div>
    </div>
}

export default About;