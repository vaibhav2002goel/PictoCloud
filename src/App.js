import NavBar from "./Components/NavBar"
import AlbumForm from "./Components/AlbumForm"
import AlbumHeadingAndFormButton from "./Components/AlbumHeadingAndFormButton"
import AlbumList from "./Components/AlbumsList"
import AlbumContent from "./Components/AlbumContent"

import { useState } from "react"

import { db } from "./firebase_init"
import {addDoc,collection} from 'firebase/firestore'

function App(){

    const [outputScreen,setOutputScreen] = useState(true)
    const [displayForm,setdisplayForm] = useState(false)
    const [albumContent,setAlbumContent] = useState(null)

    let outputScreenDisplay = (x)=>{
        let flag = true;

        if(x){
            if(!outputScreen) { flag = !outputScreen }
        }
        else{
            flag = !outputScreen
        }
        setOutputScreen(flag);
    }

    let handleDisplayAlbumForm = ()=>{
        let flag = !displayForm;

        setdisplayForm(flag)
    }

    let addAlbum = async (albumName)=>{
        await addDoc(collection(db,'Albums'), {
            albumName : albumName,
            images:[]
        })
    }

    let handleAlbumContent = (album)=>{
        console.log(album)
        setAlbumContent(album)
    }

    return(
        <>
        <NavBar outputScreenDisplay={outputScreenDisplay}/>
        {outputScreen ?
        <>
            <AlbumForm displayForm={displayForm} addAlbum={addAlbum} />
            <AlbumHeadingAndFormButton handleDisplayAlbumForm = {handleDisplayAlbumForm} displayForm={displayForm} />
            <AlbumList outputScreenDisplay={outputScreenDisplay} handleAlbumContent={handleAlbumContent} /> 
        </>
        :
        
        <AlbumContent album={albumContent} outputScreenDisplay={outputScreenDisplay} handleAlbumContent={handleAlbumContent}/>
        
        }
            
        </>

    )

}

export default App