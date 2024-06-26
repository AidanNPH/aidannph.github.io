import styles from "./Project.module.css";

const DistortedDocumentImageRectificationusingDeepLearning = () => {
    const captions = [];
    const temp = [
        {
            "content": "Home page",
            "image": require("../../assets/ReducetheForeignAccentfromyourEnglishSpeech/1.png")
        },
        {
            "content": "second page",
            "image": require("../../assets/ReducetheForeignAccentfromyourEnglishSpeech/2.png")
        },
        {
            "content": "third page",
            "image": require("../../assets/ReducetheForeignAccentfromyourEnglishSpeech/3.png")
        },
        {
            "content": "fourth page",
            "image": require("../../assets/ReducetheForeignAccentfromyourEnglishSpeech/4.png")
        },
        {
            "content": "Mobile view for the responsive application",
            "image": require("../../assets/ReducetheForeignAccentfromyourEnglishSpeech/5.png")
        },
    ]

    return (
        <div className={styles.main}>
            <h2>Distorted Document Image Rectification using Deep Learning</h2>
            <p>A web application that helps users reduce their foreign accent in English speech. The application uses machine learning to analyze the user's speech and provide feedback on how to improve their pronunciation.</p>
            {captions.map((caption, i) => (
                <div key={i} className={styles.caption}>
                    <img src={caption.image} alt={caption.content} />
                    <p>{caption.content}</p>
                </div>
            ))}
        </div>
    );
};

export default DistortedDocumentImageRectificationusingDeepLearning;