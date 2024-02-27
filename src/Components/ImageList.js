// import Image from "./Image";
import styled from "styled-components";
import Image from "./Image";
import ImageCarousel from "./ImageCarousel";

import { useEffect, useState } from "react";

import { db } from "../firebase_init";
import { onSnapshot, doc } from "firebase/firestore";


const ImageOuterDiv = styled.div`
    height:auto;
    width:70%;
    margin:auto;
    display:flex;
    flex-wrap:wrap;
    align-items:flex-start;
`


export default function ImageList(props){

    const [images,setImages] = useState([])
    const [displayCarousel,setDisplayCarousel] = useState(false)

    useEffect(()=>{ 
        onSnapshot(doc(db,'Albums',props.album.id),(doc)=>{
            setImages(doc.data().images)
        })

    })

    let showCarousel = ()=>{

        let flag = !displayCarousel;
        setDisplayCarousel(flag)
    }

    return(
        <>
            <ImageOuterDiv>
                {images.map((value)=>{

                    return(
                        <>
                            <Image id={value.id} title={value.title} url={value.url} 
                            editImage={props.editImage} deleteImage={props.deleteImage} showCarousel={showCarousel} />
                        </>
                    )
                })}
            </ImageOuterDiv>

            {displayCarousel? <ImageCarousel images={images} onClose={showCarousel} />: false }
        </>
    )

} 