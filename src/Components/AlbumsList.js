import Album from "./Album";
import styled from "styled-components";

import { useEffect, useState } from "react";

import { db } from "../firebase_init";
import { onSnapshot, collection } from "firebase/firestore";


const FolderOuterDiv = styled.div`
    height:auto;
    width:61%;
    margin:auto;
    display:flex;
    flex-wrap:wrap;
    align-items:flex-start;
`


export default function AlbumList(props){

    const [albums,setAlbums] = useState([])

    useEffect(()=>{ 

        onSnapshot(collection(db,'Albums'), (snapShot)=>{
            const albums = snapShot.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })

            setAlbums(albums)
        } )

    },[])

    return(
        <>
            <FolderOuterDiv>
                {albums.map((value,index)=>{
                    return(
                        <>
                            <Album album={value} 
                            albumName={value.albumName} 
                            outputScreenDisplay={props.outputScreenDisplay}
                            handleAlbumContent = {props.handleAlbumContent}
                            />
                            <br/>
                        </>
                    )
                })}
            </FolderOuterDiv>
        </>
    )

} 