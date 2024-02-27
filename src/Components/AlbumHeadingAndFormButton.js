import styled from 'styled-components'

const ShowFormButton = styled.button`
        position:relative;
        left:71%;
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


export default function AlbumHeadingAndFormButton(props){

    return(
        <>
            <div style={{padding:'15px',marginTop:'5px'}}>
                <ShowFormButton onClick={props.handleDisplayAlbumForm}  formDisplay={props.displayForm} >
                       <b> {props.displayForm?'Cancel':'Add Album'} </b>
                </ShowFormButton>   
                        
                <span style={{
                    fontSize:'30px',
                    marginLeft:'11%',
                }}> <b> Your Albums </b></span>
            </div>
        </>

    )

}