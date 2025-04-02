interface ExperienceTileProps {
    jobTitle: string;
    companyName: string;
    jobStart: Date;
    jobEnd?: Date;
}

const ExperienceTile = ({jobTitle, companyName, jobStart, jobEnd}: ExperienceTileProps) => {
    const startHumanReadable = jobStart.toLocaleString('en-GB', {
        month: '2-digit',
        year: 'numeric'
    });
    const endHumanReadable = jobEnd?.toLocaleString('en-GB',
        {month: '2-digit', year: 'numeric'}
    ) ?? "now";
    return <div>
        <p>{jobTitle}</p>
        <p>{companyName}</p>
        <p>{startHumanReadable} - {endHumanReadable}</p>
    </div>
}

export default ExperienceTile;