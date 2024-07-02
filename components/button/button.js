import Link from "next/link";

const Button = ({href, children, type, className}) =>{
    const styles = `py-2 px-5 text-white rounded font-semibold bg-teal-800 hover:bg-teal-900 transition-color ${className || ''}`;

    if(href){
        return(
            <Link href={href} className={styles}>
                {children}
            </Link>
        )
    }
    return(
        <button type={type} className={styles}>
            {children}
        </button>
    )
}

export default Button;