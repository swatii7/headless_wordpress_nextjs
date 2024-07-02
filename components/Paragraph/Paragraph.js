import { getTextAlign } from "utils/Fonts";
import { relativeToAbsoluteUrl } from "utils/relativeToAbsoluteUrls";

const Paragraph = ({content, textAlign, textColor}) =>{

    return(
        <p className={`max-w-5xl mx-auto mt-5 mb-3 ${getTextAlign(textAlign)}`}
        dangerouslySetInnerHTML= {{__html: relativeToAbsoluteUrl(content)}} 
        style={{color : textColor}}
        />
    )
}

export default Paragraph;