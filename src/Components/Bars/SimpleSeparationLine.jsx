const SimpleSeparationLine = ({...props}) => {
    const { customClass, customStyle } = props
    return (
        <>
            <hr className={`m-0 p-0 border border-1 ${customClass}`} style={{ backgroundColor: "#FFBA08", customStyle }}/>
        </>
    )
}

export default SimpleSeparationLine