import GeneratingAnimeCharacterFaceswithStyleGAN2 from "./projects/GeneratingAnimeCharacterFaceswithStyleGAN2";
import DataExploreronCOVID19 from "./projects/DataExploreronCOVID19";
import DistortedDocumentImageRectificationusingDeepLearning from "./projects/DistortedDocumentImageRectificationusingDeepLearning";
import PromptEnhancementforAITools from "./projects/PromptEnhancementforAITools";
import ReducetheForeignAccentfromyourEnglishSpeech from "./projects/ReducetheForeignAccentfromyourEnglishSpeech";

const Project = ({title}) => {
    switch (title) {
        case 'GeneratingAnimeCharacterFaceswithStyleGAN2':
            return <GeneratingAnimeCharacterFaceswithStyleGAN2 />;
        case 'DataExploreronCOVID19':
            return <DataExploreronCOVID19 />;
        case 'DistortedDocumentImageRectificationusingDeepLearning':
            return <DistortedDocumentImageRectificationusingDeepLearning />;
        case 'PromptEnhancementforAITools':
            return <PromptEnhancementforAITools />;
        case 'ReducetheForeignAccentfromyourEnglishSpeech':
            return <ReducetheForeignAccentfromyourEnglishSpeech />;
        default:
            return <h2 style={{'paddingBottom': '5vh'}}>Project Not Found</h2>;
    }
}

export default Project;