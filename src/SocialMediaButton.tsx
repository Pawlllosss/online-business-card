interface SocialMediaButtonProps {
    text: string;
    icon: React.ReactNode;
}

function SocialMediaButton({text, icon}: SocialMediaButtonProps) {
    return (
        <button
            className="bg-gray-900 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded-md inline-flex items-center">
            <span className="whitespace-nowrap">{text}</span>
            {icon}
        </button>
    );
}

export default SocialMediaButton;