import { useEffect, useRef } from 'react'
import '../CSS/albumForm.css'


export default function AlbumForm(props){
    
    const albumFormInput = useRef(null);

    useEffect(()=>{
        if(props.displayForm){
            albumFormInput.current.focus();
        }
    })

    let clearInputField = (e)=>{
        e.preventDefault()
        albumFormInput.current.value = ''

        albumFormInput.current.focus();
    }


    return(
        <>

        {props.displayForm ?                
            <form class="album-creation-form">
            
                <h2> <b> Create an album </b></h2>
                <input required ref={albumFormInput} type="text" id="albumName" name="albumName" placeholder="Album Name" />
                <button className='clickButton' onClick={clearInputField} id="clearButton">Clear</button>
                <button className='clickButton' onClick={()=>{
                        // e.preventDefault()
                        props.addAlbum(albumFormInput.current.value)
                        albumFormInput.current.value = ''
                        albumFormInput.current.focus()
                    }}  
                    
                    id="createButton">Create</button>

            </form>
            
        : ''}

        </>
    )
}

// export {}