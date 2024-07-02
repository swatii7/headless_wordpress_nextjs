export const Column = ({width, children}) =>{

    const widthStyle = width ? {minWidth: width, flexGrow: 1} : {flexGrow: 1, flexBasis: 0}
    return(
        <div style={widthStyle} className='px-5 py-2'>
            {children}
        </div>
    )
}