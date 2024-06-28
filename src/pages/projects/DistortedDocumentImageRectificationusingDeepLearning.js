import styles from "./Project.module.css";

const DistortedDocumentImageRectificationusingDeepLearning = () => {
    const captions = [
        {
            "content": "The application aims to rectifiy rather complex distortions, such as multiple folds.",
            "image": require("../../assets/DistortedDocumentImageRectificationusingDeepLearning/1.png")
        },
        {
            "content": "The system applies the geometric technique Coons Patch Interpolation to implement the rectification.",
            "image": require("../../assets/DistortedDocumentImageRectificationusingDeepLearning/5.png")
        },
        {
            "content": "Deep learning is used to automate a vital element of the algorithm, which is accurately matching the boundary points of the document. For the algorithm to produce high quality, we need as many mapping points as possible, which may take a lot of time if we attempt that manually.",
            "image": require("../../assets/DistortedDocumentImageRectificationusingDeepLearning/3.png")
        },
        {
            "content": "When preparing data for deep-learning model training, realistic document images with moderately complex and common distortions, such as multiple folds or curls, were synthesized using PyOpenGL, instead of spending a vast amount of time to take pictures. The distortions were modeled by functions in 3D space. Screenshots were taken after mapping patches of the document to the models.",
            "image": require("../../assets/DistortedDocumentImageRectificationusingDeepLearning/4.png")
        }
    ]

    return (
        <div className={styles.main}>
            <h2>Distorted Document Image Rectification using Deep Learning</h2>
            <p>A project that leverages deep learning with traditional geometric techniques to rectify images of distorted documents. The application aims to enhance document scanning using mobile devices by enabling automatic rectification of rather complex distortions.</p>
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