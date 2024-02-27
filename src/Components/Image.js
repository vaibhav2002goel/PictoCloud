import moduleStyling from '../CSS/moduled-css/image.module.css'

export default function Image(props){

    return(

        <>
            <div className={moduleStyling.folder} >

                <div className={moduleStyling.hide} id={moduleStyling.editContainer1}></div>
                <div className={moduleStyling.hide} id={moduleStyling.deleteContainer1}></div>

                <div onClick={ ()=>{props.editImage(props.id,props.title,props.url)}  } 
                     className={moduleStyling.dynamicDisplayButtons} id={moduleStyling.editContainer}>

                        <img id={moduleStyling.editImage} alt='edit' src='https://cdn-icons-png.flaticon.com/128/1250/1250615.png' /> 

                </div>

                <div onClick={()=>{props.deleteImage(props.id)}} className={moduleStyling.dynamicDisplayButtons} id={moduleStyling.deleteContainer}>
                        <img id={moduleStyling.deleteImage} alt='edit' src='https://cdn-icons-png.flaticon.com/128/3395/3395538.png' /> 
                </div>

                <div onClick={()=>props.showCarousel()} id={moduleStyling.imageContainer}>

                    <img className={moduleStyling.image} 
                         src={props.url} 
                         onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src="https://cdn-icons-png.flaticon.com/128/738/738884.png";
                          }}
                         alt="Image"
                    />
                </div>

                <div id={moduleStyling.albumName}>
                    <p><b>{props.title}</b></p>
                </div>


            </div>

        </>

    )

}