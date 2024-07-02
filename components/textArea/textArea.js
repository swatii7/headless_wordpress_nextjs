export default function TextArea({required, id, name, className}){
    return(
        <textarea required={required} id={id} name={name} className={`border rounded border-slate-300 outline-0 py-1 px-3 hover:border-slate-900 focus:border-slate-900 ${className || ''}`} />
    )
}