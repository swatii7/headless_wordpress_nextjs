export default function Input({required, type, name, id, className}){
    return(
        <input required={required} type={type} name={name} id={id} className={`border-2 rounded border-teal-700 outline-0 py-1 px-3 hover:border-teal-800 focus:border-teal-800 w-2/4 ${className || ''}`} />
    )
}