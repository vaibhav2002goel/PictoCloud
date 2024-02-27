// import { useEffect, useRef } from 'react'
import { useRef, useEffect, useState } from 'react'
import '../CSS/albumForm.css'


export default function ImageForm(props){

    console.log('props',props);

    const [newTitle,setNewTitle] = useState(null)
    const [newUrl,setNewUrl] = useState(null)

    let titleRef = useRef();
    let urlRef = useRef();

    useEffect(()=>{
        if(props.displayForm){
            titleRef.current.focus();
            // console.log('abc')
        }
    },[props.displayForm])

    useEffect(()=>{

        setNewTitle(props.updateTitle)
        setNewUrl(props.updateUrl)

    },[props.updateTitle])


    let clearInputField = (e)=>{
        e.preventDefault()
        titleRef.current.value = ''
        urlRef.current.value = ''

        titleRef.current.focus();
    }

    return(
        <>
        {props.displayForm?                
            <form class="album-creation-form">
                
                {props.updateTitle
                 ?
                    <h2> <b> Update Image {props.updateTitle}</b> </h2>
                 :
                    <h2> <b> Add Images to {props.albumName} </b></h2>
                }

                {props.updateTitle
                 ?
                    <>
                        <input required ref={titleRef} type="text" id="albumName" name="title" placeholder="Title" 
                               value={newTitle} onChange={(e)=>{ setNewTitle(e.target.value) }} 
                               style={{width:'90%'}} />

                        <input required ref={urlRef} type="text" id="albumName" name="URL" placeholder="Image URL" 
                               value={newUrl} onChange={(e)=>{setNewUrl(e.target.value) }}
                               style={{width:'90%'}} />
                    </>
                   
                 :
                    <>
                        <input required ref={titleRef} type="text" id="albumName" name="title" placeholder="Title" style={{width:'90%'}} />
                        <input required ref={urlRef} type="text" id="albumName" name="URL" placeholder="Image URL" style={{width:'90%'}} />
                    </>
                }
                
                <button className='clickButton' style={{marginLeft:'3.5%'}} onClick={clearInputField} id="clearButton">Clear</button>

                {props.updateTitle
                 ?
                    <>
                        <button className='clickButton' onClick={()=>{
                            // e.preventDefault()
                            
                            let obj = {
                                title:titleRef.current.value,
                                url:urlRef.current.value
                            }
                            
                            if(titleRef.current.value && urlRef.current.value){
                                props.updateImage(obj)
                            }
                            
                            titleRef.current.value = ''
                            urlRef.current.value = ''
                            
                            titleRef.current.focus();
                            
                        }}  
                        
                        id="createButton">Update</button>
                    </>
                 :
                    <>
                        <button className='clickButton' onClick={()=>{
                            // e.preventDefault()
                            let imageId = "id" + Math.random().toString(16).slice(2)
                            let obj = {
                                id:imageId,
                                title:titleRef.current.value,
                                url:urlRef.current.value
                            }
                            
                            if(titleRef.current.value && urlRef.current.value){
                                props.addImage(obj)
                            }
                            
                            titleRef.current.value = ''
                            urlRef.current.value = ''
                            
                            titleRef.current.focus();
                            
                        }}  
                        
                        id="createButton">Create</button>
                    </>
                }

            </form>
            
        : ''}

        </>
    )
}
