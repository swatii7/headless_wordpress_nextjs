import Link from "next/link";
import Image from "next/image";
import Button from "components/button/button";
// import productOne from '../../public/productImage/productOne.jpeg'

export default function Card({href, title, subtitle, btnLabel, imgSrc}){
    return(
        <div className="text-center">
            <Link href={href}>
                <Image
                className="mx-auto block mb-4"
                width="600"
                height="400"
                src= {imgSrc}
                alt= 'card thumbnail image'
                 />
            </Link>
            <div className="font-semibold text-center text-xl mb-1">{title}</div>
            <div className="text-md text-center mb-4">{subtitle}</div>
            <Button href={href}>{btnLabel}</Button>
        </div>
    )
}