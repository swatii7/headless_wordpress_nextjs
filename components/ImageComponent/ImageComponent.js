import Image from "next/image"
import Link from "next/link";

const ImageComponent = ({src, width, height, href, alt}) =>{
    return(
        <Link href={href}>
        <Image src={src} width={width} height={height} alt={alt} />
        
        </Link>
        
    )
}

export default ImageComponent;