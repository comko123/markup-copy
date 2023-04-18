const ProfilPhoto = (props:ProfilPhotoProps) => {
    return (<>{props.img?
        null:<svg xmlns="http://www.w3.org/2000/svg" fill="none" 
        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className={`${props.position} aspect-square bg-white rounded-full`}>
            <path strokeLinecap="round" strokeLinejoin="round" d={props.domain?props.domain:props.outside} />
           {props.inside? <path strokeLinecap="round" strokeLinejoin="round" d={props.inside} />:null}
        </svg>}</>)
}
export default ProfilPhoto