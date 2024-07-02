import Link from "next/link"

export const ButtonLink = ({label, destination, backgroundColor, display, textColor, fontWeight, borderRadius, margin, padding }) =>{
    // console.log(destination,'destination')
    return(
        <Link href={'product'+destination.uri} style={{backgroundColor: backgroundColor, 
            display: display,
            color: textColor,
            fontWeight: fontWeight,
            borderRadius: borderRadius,
            margin: margin,
            padding: padding
        }} 
        className='hover:bg-teal-800'
        >
            {label}
        </Link>
    )
}