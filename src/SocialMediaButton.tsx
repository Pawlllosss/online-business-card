function SocialMediaButton({text}: Readonly<{ text: string }>) {
    return (
        <button
            className="bg-gray-900 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded-md inline-flex items-center">
            <span className="whitespace-nowrap">{text}</span>
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>
            {/*<svg className="fill-current w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">*/}
            {/*    <path fill="#0288d1" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path>*/}
            {/*    <rect width="4" height="15" x="14" y="19" fill="#fff"></rect>*/}
            {/*    <path fill="#fff"*/}
            {/*          d="M16,17L16,17c-1.2,0-2-0.9-2-2c0-1.1,0.8-2,2-2c1.2,0,2,0.9,2,2C18,16.1,17.2,17,16,17z"></path>*/}
            {/*    <path fill="#fff"*/}
            {/*          d="M35,24.5c0-3-2.5-5.5-5.5-5.5c-1.9,0-3.5,0.9-4.5,2.3V19h-4v15h4v-8c0-1.7,1.3-3,3-3s3,1.3,3,3v8h4	C35,34,35,24.9,35,24.5z"></path>*/}
            {/*</svg>*/}
        </button>
    );
}

export default SocialMediaButton;