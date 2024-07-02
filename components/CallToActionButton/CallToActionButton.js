import { ButtonLink } from "components/ButtonLink"

export const CallToActionButton = ({label, destination, align, backgroundColor, borderRadius, display, fontWeight, margin, padding, textColor}) =>{

    const alignMap = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    }

    return(
        <div className={alignMap[align]}>
           <ButtonLink label={label} 
           destination={destination} 
           backgroundColor={backgroundColor} 
           borderRadius={borderRadius} 
           display={display} 
           fontWeight={fontWeight} 
           margin={margin} 
           padding={padding} 
           textColor={textColor} />
        </div>
    )
}