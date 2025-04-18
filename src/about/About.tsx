import ExperienceTile from "./ExperienceTile.tsx";

const About = () => {
    return <div className="flex h-[60vh] flex-col">
        <h1 className="text-center">Work Experience</h1>
        <div className="flex justify-center">
            <div className="flex w-1/3 flex-col space-y-20 items-start mt-6">
                <ExperienceTile jobTitle="Senior Software Engineer" companyName="Tesco" jobStart={new Date(2024, 10)}/>
                <ExperienceTile jobTitle="Software Engineer" companyName="Appliscale" jobStart={new Date(2019, 11)}
                                jobEnd={new Date(2024, 10)}/>
                <ExperienceTile jobTitle="Java developer" companyName="Comarch" jobStart={new Date(2019, 2)}
                                jobEnd={new Date(2019, 11)}/>
                <ExperienceTile jobTitle="Telecom Software Tester - Working Student" companyName="Nokia"
                                jobStart={new Date(2018, 5)}
                                jobEnd={new Date(2019, 2)}/>
                <ExperienceTile jobTitle="Cloud Services Intern" companyName="Aptiv"
                                jobStart={new Date(2017, 11)}
                                jobEnd={new Date(2018, 1)}/>
            </div>
        </div>
    </div>
}

export default About;