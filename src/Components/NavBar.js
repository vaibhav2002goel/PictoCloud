import styled from 'styled-components'

const Container = styled.div`
    &:hover{
        cursor:pointer;
    }

`

export default function NavBar(props){

    return(
        <>
            <div style={{
                height:'6em',
                width:'100%',
                backgroundImage: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)',
            }} >  
                <Container onClick={()=>props.outputScreenDisplay('Navbar')} >
                    <img alt="Album" src="https://mellow-seahorse-fc9268.netlify.app/assets/logo.png" style={{
                        height:'65px',
                        width:'65px',
                        margin:'9px',
                        marginLeft:'80px',
                        marginTop:'12px',
                        display:'inline-block'
                    }}  />

                    <span style={{
                        position:'relative',
                        fontSize:'35px',
                        color:"white",
                        marginLeft:'10px',
                        top:'-30px'
                    }} > <b> PictoCloud </b></span>
                </Container>
            </div>
        </>
    )
}