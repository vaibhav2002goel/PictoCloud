// import styled from 'styled-components'
import AlbumFolderHeadingAndButton from './AlbumFolderHeadingAndButton'
import ImageForm from './ImageForm';
import ImageList from './ImageList';

import { db } from '../firebase_init';
import { doc, updateDoc,getDoc } from 'firebase/firestore';

import { useState } from 'react'

export default function AlbumContent(props){

    const [formDisplay,setFormDisplay] = useState(false);
    const [updateTitle,setUpdateTitle] = useState('');
    const [updateUrl,setUpdateUrl] = useState('')
    const [updateImageId,setUpdateImageId] = useState('')

    let handleFormDisplay = ()=>{
        let flag = !formDisplay;

        setUpdateTitle('')
        setUpdateUrl('')
        setFormDisplay(flag);
    }

    let addImage = async (image)=>{

        const docRef = doc(db,'Albums',props.album.id)
        const docSnap = await getDoc(docRef);

        let arr = docSnap.data().images

        arr.push(image)

        const albumRef = doc(db,'Albums',props.album.id)
        await updateDoc(albumRef,{
            images:arr
        })

    }

    let editImage = async (id,title,url)=>{
        
        setUpdateImageId(id)
        setUpdateTitle(title)
        setUpdateUrl(url)

        setFormDisplay(true)
    }

    let updateImage = async (newImage)=>{
        const docRef = doc(db,'Albums',props.album.id)
        const docSnap = await getDoc(docRef);

        // console.log(newImage)
        // console.log(docSnap)
        // console.log(docSnap.data())

        let arr = docSnap.data().images;

        for(let i=0;i<arr.length;i++){
            if(arr[i].id===updateImageId){
                arr[i].title = newImage.title;
                arr[i].url = newImage.url;
                break;
            }
        }

        await updateDoc(docRef,{
            images:arr
        })
    }

    let deleteImage = async (id)=>{
        console.log(id);
        
        const docRef = doc(db,'Albums',props.album.id);
        const docSnap = await getDoc(docRef)

        let arr = docSnap.data().images.filter((value,index)=>{
            return value.id !== id
        })

        // props.handleAlbumContent(arr);

        await updateDoc(docRef,{
            images:arr
        })
    }

    // I have the complete Album object here. Whichever album is opened i have contents of it.
    return(
        <>
            <ImageForm displayForm={formDisplay} albumName={props.album.albumName} addImage={addImage} 
                       updateTitle={updateTitle} updateUrl={updateUrl} updateImage={updateImage} />

            <AlbumFolderHeadingAndButton handleFormDisplay={handleFormDisplay} formDisplay={formDisplay} 
                                         outputScreenDisplay={props.outputScreenDisplay}
                                         albumId={props.album.id} albumName={props.album.albumName} images={props.album.images} />

                    
            <ImageList album={props.album} editImage={editImage} deleteImage={deleteImage}  />
            

        </>
    )

}