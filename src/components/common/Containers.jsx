import styled from 'styled-components'


// full container
export const BigContainer = styled.div`
width: ${props=> props.width}; 
height: 100vh;
margin:0 auto;
display:flex;
justify-content: center;
align-items: center;
padding: ${props=> props.padding};
overflow:hidden;
position:relative;

@media only screen and (max-width: 768px) {
        /* For mobile phones: */
        height: 130vh;

        }
`;


// section container

export const SmallContainer = styled.div`
    flex:${props=> props.flex};
    width: 100%; 
    height: 100%;
    display:flex;
    justify-content: ${props=> props.justify};
    align-items: ${props=> props.align};
    padding: ${props=> props.padding};
    margin: ${props=> props.margin};
    background-color:${props=> props.backgroundColor};
    flex-direction:${props=> props.flexDirection};
    color:${props=> props.color};
    text-align:${props=> props.color};
    
`;

// fixed container

export const FixedContainer = styled(SmallContainer)`
    width: ${props=> props.width}; 
    height: ${props=> props.height};
    position:${props=> props.position};
`;