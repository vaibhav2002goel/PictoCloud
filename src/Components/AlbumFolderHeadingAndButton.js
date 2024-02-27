import styled from 'styled-components'

export default function AlbumFolderHeadingAndButton(props){

    const Container = styled.div`
        width:70%;
        display:flex;
        justify-content:space-between;
        margin:auto;
        margin-top:4%;
    `
    const BackButton = styled.span`
        height:40px;
        width:40px;
        background-color:white;
        display:inline-block;
        border-radius:100%;
        padding:10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        &:hover{
            cursor:pointer;
        }

    `
    const BackButtonImage = styled.img`
        height:90%;
        width:90%;
        margin-left:2%;
    `

    const AlbumHeading = styled.span`
        position:relative;
        font-size:35px;
        margin-left:5%;
        top:-7%;
    `

    const ShowImageFormButton = styled.button`
        position:relative;
        left:-20%;
        top:15%;
        border:  ${(props)=>{ 
            if(props.formDisplay){
                return '2px solid #FF0000;'
            }
            else{
                return '2px solid #1E90FF;'
            }
            
        }} 
        background-color: ${(props)=> {
            if(props.formDisplay){
                return '#EFA5A5;'
            }
            else{
                return '#B0E0E6;'
            }
        }}
        color: ${(props)=>{
            if(props.formDisplay){
                return '#8B0000;'
            }
            else{
                return '#4169E1;'
            }
        }} 
        width:100px;
        height:40px;
        font-size:15px;
        padding:0px;
    `

    return(
        <>
            <Container>
                <div style={{display:'inline-block', width:'60%'}}>
                    <BackButton onClick={props.outputScreenDisplay}><BackButtonImage alt='back' src='https://cdn-icons-png.flaticon.com/128/7168/7168662.png' /></BackButton>
                    <AlbumHeading>  {props.images.length?<b>Images in {props.albumName}</b>:<b>No Images found in the album</b>}  </AlbumHeading>
                </div>
                <div style={{display:'inline-block'}} > 
                    <ShowImageFormButton onClick={props.handleFormDisplay} formDisplay={props.formDisplay}>
                        <b>{props.formDisplay?'Cancel':'Add Image'}</b> 
                    </ShowImageFormButton> 
                </div>
            </Container>
        </>
    )

}