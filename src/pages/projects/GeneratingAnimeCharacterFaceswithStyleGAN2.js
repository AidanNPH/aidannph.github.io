import styles from "./Project.module.css";

const GeneratingAnimeCharacterFaceswithStyleGAN2 = () => {
    const captions = [
        {
            "content": "After training StyleGAN2 on a dataset of anime faces, it can randomly generate new characters, which are not in the dataset.",
            "image": require("../../assets/GeneratingAnimeCharacterFaceswithStyleGAN2/1.png")
        },
        {
            "content": "When controlling the facial attributes of the output, the process begins with the model generating a large random set of anime faces. Users then choose the samples that exhibit the desired features, such as pink hair in the left 7 pictures. Using mathematical tricks, the model can generate new characters that incorporate the selected attributes. The advantage of this approach is that it allows users to express their desired features simply by selecting sample faces based on their preferences, even if indescribable. Without the need to articulate these features in words, the outcomes are not limited by their ability to express verbally.",
            "image": require("../../assets/GeneratingAnimeCharacterFaceswithStyleGAN2/2.png")
        },
        {
            "content": "The model also accepts an input to control the level of variation. (E.g., when given the same set of pink hair characters, the styles are more diverse on the left, whereas the styles are more uniform on the right.)",
            "image": require("../../assets/GeneratingAnimeCharacterFaceswithStyleGAN2/3.png")
        }
    ]

    return (
        <div className={styles.main}>
            <h2>Generating Anime Character Faces with StyleGAN2</h2>
            <p>A program that generates anime faces randomly. It also involves a novel approach to control facial attributes of the output, such as hair color and hairstyle, by selecting example outputs with the desired features. The goal is to help artists brainstorm and gain inspiration during character design.</p>
            {captions.map((caption, i) => (
                <div key={i} className={styles.caption}>
                    <img src={caption.image} alt={caption.content} />
                    <p>{caption.content}</p>
                </div>
            ))}
        </div>
    );
}

export default GeneratingAnimeCharacterFaceswithStyleGAN2;