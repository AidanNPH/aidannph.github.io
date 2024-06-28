import styles from "./Project.module.css";

const PromptEnhancementforAITools = () => {
    const captions = [
        {
            "content": "The user begins by providing a simple or ambiguous prompt about the picture in their mind. The app then prompts an LLM to generate scene attributes, encouraging users to give more details. Based on the user's input, the model enriches the prompt. Once satisfied, the user can create the image using the refined prompt.",
            "image": require("../../assets/PromptEnhancementforAITools/1.png")
        },
    ]

    return (
        <div className={styles.main}>
            <h2>Prompt Enhancement for AI Tools</h2>
            <p>A web application that utilizes prompt engineering techniques to help users produce more detailed prompts for image generation. The purpose is to assist users in turning vague wordings into expressive descriptions so that they can generate the exact pictures in their minds effortlessly.</p>
            {captions.map((caption, i) => (
                <div key={i} className={styles.caption}>
                    <img src={caption.image} alt={caption.content} />
                    <p>{caption.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PromptEnhancementforAITools;