import styles from './Project.module.css';

const ReducetheForeignAccentfromyourEnglishSpeech = () => {
    const captions = [
        {
            "content": "Web application home page. The three main tabs are 'Model Training', 'Text-to-Speech', and 'Speech-to-Text'.",
            "image": require("../../assets/ReducetheForeignAccentfromyourEnglishSpeech/1.png")
        },
        {
            "content": "Users can use the embedded recorder to input their voice. These recordings will be used as the training data for fine-tuning the model. Users can check the training status in this page as well.",
            "image": require("../../assets/ReducetheForeignAccentfromyourEnglishSpeech/2.png")
        },
        {
            "content": "Users can input text, and the application will generate the corresponing speech using their voice with a native accent.",
            "image": require("../../assets/ReducetheForeignAccentfromyourEnglishSpeech/3.png")
        },
        {
            "content": "Users can use their own speech as input, and the application will generate a speech of the same content using their voice with a native accent.",
            "image": require("../../assets/ReducetheForeignAccentfromyourEnglishSpeech/4.png")
        },
        {
            "content": "Mobile views of the responsive application",
            "image": require("../../assets/ReducetheForeignAccentfromyourEnglishSpeech/5.png")
        },
    ]

    return (
        <div className={styles.main}>
            <h2>Reduce the Foreign Accent from your English Speech</h2>
            <p>
                A web application that leverages machine learning to help users reduce their foreign accent in English speech. It is capable of generating speech using the same voice as the user, whose first language may not be English, but with a native accent. Examples of use cases include pronunication training and improving video voice-over with a native accent.
            </p>
            <br />
            <p>
                The model architecture is based on the text-to-speech model <a href='https://arxiv.org/abs/1712.05884v2'>Tacotron 2</a>. Modifications were made based on <a href='https://www.isca-archive.org/interspeech_2022/chung22_interspeech.html'>previous work by Chung and Mak (2022)</a>, such that the model can control the voice identity and speaking style, which influences the accent. Comparing synthesized speech with the original in the test set, we reduced pronunication error by a half, while sacrificing slight drops in naturalness and voice similarity.
            </p>
            <br />
            <p>
                This project received the <a href='https://cse.hkust.edu.hk/ug/fyp/bestfyp/'>Best Final Year Project Award</a> from the Department of Computer Science and Engineering, Hong Kong University of Science and Technology. (<a href='https://cse.hkust.edu.hk/ug/fyp/posters/gallery/2022-2023/45_MA1_Media.mp4'>Promotional video</a>)
            </p>
            <br />
            <span>Example: (Text: But there was also talk of witchcraft in the village)</span>
            <div className={styles.audioSample}>
                <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
                    <audio controls>
                        <source src={require('../../assets/ReducetheForeignAccentfromyourEnglishSpeech/original.wav')} type='audio/wav' />
                    </audio>
                    <span>Original speech in test set</span>
                </div>
                <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
                    <audio controls>
                        <source src={require('../../assets/ReducetheForeignAccentfromyourEnglishSpeech/generated.wav')} type='audio/wav' />
                    </audio>
                    <span>Generated speech</span>
                </div>
            </div>
            {captions.map((caption, i) => (
                <div key={i} className={styles.caption}>
                    <img src={caption.image} alt={caption.content} />
                    <p>{caption.content}</p>
                </div>
            ))}
        </div>
    );
}

export default ReducetheForeignAccentfromyourEnglishSpeech;