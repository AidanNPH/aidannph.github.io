import AnimeFaceGeneration from "./projects/AnimeFaceGeneration";
import COVIDDataExplorer from "./projects/COVIDDataExplorer";
import DocumentRectificationusingDeepLearning from "./projects/DocumentRectificationusingDeepLearning";
import PromptEnhancer from "./projects/PromptEnhancer";
import ReducetheForeignAccentinyourEnglishSpeech from "./projects/ReducetheForeignAccentinyourEnglishSpeech";

const Project = ({title}) => {
    switch (title) {
        case 'AnimeFaceGeneration':
            return <AnimeFaceGeneration />;
        case 'COVIDDataExplorer':
            return <COVIDDataExplorer />;
        case 'DocumentRectificationusingDeepLearning':
            return <DocumentRectificationusingDeepLearning />;
        case 'PromptEnhancer':
            return <PromptEnhancer />;
        case 'ReducetheForeignAccentinyourEnglishSpeech':
            return <ReducetheForeignAccentinyourEnglishSpeech />;
        default:
            return <h2 style={{'paddingBottom': '5vh'}}>Project Not Found</h2>;
    }
}

export default Project;