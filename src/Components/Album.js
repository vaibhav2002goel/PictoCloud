import moduleStyling from '../CSS/moduled-css/album.module.css'

export default function Album(props){

    return(

        <>
            <div onClick={()=>{
                    props.outputScreenDisplay(null)
                    props.handleAlbumContent(props.album)
                }} className={moduleStyling.folder} >

                <div id={moduleStyling.imageContainer}>
                    <img className={moduleStyling.image} alt="folder" src="https://cdn-icons-png.flaticon.com/128/1375/1375106.png" />
                </div>

                <div id={moduleStyling.albumName}>
                    <p><b>{props.albumName}</b></p>
                </div>
            </div>

        </>

    )

}