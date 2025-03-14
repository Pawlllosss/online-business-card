import SocialMediaButton from "./SocialMediaButton.tsx";

const Info = () => {
    const linkedInIcon = <svg className="fill-current w-5 h-5 ml-2 mb-1" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48">
        <path fill="#0288d1"
              d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path>
        <rect width="4" height="15" x="14" y="19" fill="#fff"></rect>
        <path fill="#fff"
              d="M16,17L16,17c-1.2,0-2-0.9-2-2c0-1.1,0.8-2,2-2c1.2,0,2,0.9,2,2C18,16.1,17.2,17,16,17z"></path>
        <path fill="#fff"
              d="M35,24.5c0-3-2.5-5.5-5.5-5.5c-1.9,0-3.5,0.9-4.5,2.3V19h-4v15h4v-8c0-1.7,1.3-3,3-3s3,1.3,3,3v8h4C35,34,35,24.9,35,24.5z"></path>
    </svg>;
    const gitHubIcon = <svg className="fill-current w-6 h-6 ml-2 mb-1" viewBox="0 0 50 50">
        <path
            d="M 25 8 C 15.611 8 8 15.611 8 25 C 8 34.389 15.611 42 25 42 C 34.389 42 42 34.389 42 25 C 42 15.611 34.389 8 25 8 z M 25 9 C 33.837 9 41 16.163 41 25 C 41 32.315911 36.085048 38.472093 29.380859 40.378906 C 29.244571 40.172672 29.145294 39.932396 29.152344 39.650391 C 29.179344 38.593391 29.152344 36.129609 29.152344 35.224609 C 29.152344 33.671609 28.169922 32.570312 28.169922 32.570312 C 28.169922 32.570312 35.878906 32.657641 35.878906 24.431641 C 35.878906 21.257641 34.222656 19.605469 34.222656 19.605469 C 34.222656 19.605469 35.092922 16.216297 33.919922 14.779297 C 32.604922 14.637297 30.249141 16.036453 29.244141 16.689453 C 29.244141 16.689453 27.652953 16.037109 25.001953 16.037109 C 22.350953 16.037109 20.757812 16.689453 20.757812 16.689453 C 19.751812 16.036453 17.397031 14.637297 16.082031 14.779297 C 14.909031 16.216297 15.779297 19.605469 15.779297 19.605469 C 15.779297 19.605469 14.121094 21.255688 14.121094 24.429688 C 14.121094 32.655687 21.830078 32.568359 21.830078 32.568359 C 21.830078 32.568359 21.05381 33.443176 20.882812 34.730469 C 20.35101 34.918958 19.615523 35.146484 18.914062 35.146484 C 17.241063 35.146484 15.969906 33.519578 15.503906 32.767578 C 15.043906 32.025578 14.101656 31.402344 13.222656 31.402344 C 12.643656 31.402344 12.359375 31.692438 12.359375 32.023438 C 12.359375 32.354437 13.171031 32.584266 13.707031 33.197266 C 14.837031 34.490266 14.816844 37.400391 18.839844 37.400391 C 19.314 37.400391 20.165462 37.292676 20.847656 37.199219 C 20.843251 38.143438 20.832715 39.064049 20.847656 39.648438 C 20.854716 39.930842 20.755741 40.172492 20.619141 40.378906 C 13.914952 38.472093 9 32.315911 9 25 C 9 16.163 16.163 9 25 9 z"></path>
    </svg>;

    return <div className="flex flex-col">
        <div className="grow flex flex-col">
            <h1 id='engineer-name'
                className="grow-0 text-2xl text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                Paweł Oczadly
            </h1>
            <h1 id='engineer-name'
                className="grow-0 text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                Software Engineer
            </h1>
            <div className="grow flex flex-col justify-center py-16">
                <span>Java and Kotlin developer with some TypeScript and React expertise.</span>
                <span>Working in IT industry since 2017.</span>
                <span>Located in Poland - Kraków.</span>
            </div>
        </div>
        <div className="flex justify-evenly mt-8 space-x-8">
            <SocialMediaButton text="My LinkedIn"
                               icon={linkedInIcon}
                               link="https://www.linkedin.com/in/pawe%C5%82-oczadly-a6a42b159/"
            />
            <SocialMediaButton text="My GitHub"
                               icon={gitHubIcon}
                               link="https://github.com/Pawlllosss"
            />
        </div>
    </div>;
}

export default Info;