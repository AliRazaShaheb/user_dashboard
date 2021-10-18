import React from 'react'
import styled from 'styled-components'
import { SmallContainer } from '../common/Containers'
import { colors } from '../../theme/Colors'
import { borderRadius } from '../../theme/BorderRadius'
import { Title } from '../../theme/Typography'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { userListSelector } from '../../state/UserListSlice'
import GMap from '../dashboard/GoogleMap'



const UserInfo = () => {
    

    const {selectedUser} = useSelector(userListSelector)

    let empLat = selectedUser.address.geo.lat.replace(/hotlink-ok/ig,"");
    let empLng = selectedUser.address.geo.lng.replace(/hotlink-ok/ig,"");

    return (
        <>
        <Wrapper 
            flex={8.8} 
            padding="2% 0 0 0"
        >
                    
            {/* left section */}
            <Left 
                flex={3.5} 
                justify="center" 
                align="center" 
                flexDirection="column" 
            >
                {/* left section top */}
                <Top 
                    flex={4} 
                    justify="center" 
                    align="center" 
                    flexDirection="column">

                    <Avatar 
                        alt={selectedUser.name} 
                        src={selectedUser.profilepicture} 
                        sx={{ width: 200, height: 200 }}
                    />

                    <Row>
                        <Title style={{marginTop:"2%"}}>
                            {selectedUser.name} 
                        </Title>
                    </Row>
                </Top>

                {/* left Bottom (Data Table Section) */}
                <DataTable flex={6} flexDirection="column">
                    <Row>
                        <ColumnOne>Username :</ColumnOne>
                        <ColumnTwo>{selectedUser.username}</ColumnTwo>
                    </Row>
                    <Row>
                        <ColumnOne>E-mail :</ColumnOne>
                        <ColumnTwo>{selectedUser.email}</ColumnTwo>
                    </Row>
                    <Row>
                        <ColumnOne>Phone :</ColumnOne>
                        <ColumnTwo>{selectedUser.phone.replace(/\D/ig,"")}</ColumnTwo>
                    </Row>
                    <Row>
                        <ColumnOne>Website :</ColumnOne>
                        <ColumnTwo>{selectedUser.website}</ColumnTwo>
                    </Row>
                    
                    <hr style={{width:`70%`, margin:`0 auto 2% auto`}}/>
                    
                    <Row>Company  </Row>
                    
                    <Row>
                        <ColumnOne>Name : </ColumnOne>
                        <ColumnTwo>{selectedUser.company.name}</ColumnTwo>
                    </Row>
                    <Row>
                        <ColumnOne>Catchphrase :</ColumnOne>
                        <ColumnTwo>{selectedUser.company.catchPhrase}</ColumnTwo>
                    </Row>
                    <Row>
                        <ColumnOne>bs :</ColumnOne>
                        <ColumnTwo>{selectedUser.company.bs}</ColumnTwo>
                    </Row>
                </DataTable>

            </Left>

            {/* right section */}
            <Right 
                flex={6.5} 
                justify="center" 
                align="center"  
                flexDirection="column"
            >
                {/* right section Top */}
                <Top 
                    flex={2.5} 
                    justify="flex-start" 
                    align="center" 
                >

                {/* right section Address Table Data */}
                <DataTable flexDirection="column">

                        <Row>Address  </Row>
                        <Row>
                            <ColumnOne>Street : </ColumnOne>
                            <ColumnTwo>{selectedUser.address.street}</ColumnTwo>
                        </Row>
                        <Row>
                            <ColumnOne>Suite :</ColumnOne>
                            <ColumnTwo>{selectedUser.address.suite}</ColumnTwo>
                        </Row>
                        <Row>
                            <ColumnOne>City :</ColumnOne>
                            <ColumnTwo>{selectedUser.address.city}</ColumnTwo>
                        </Row>
                        <Row>
                            <ColumnOne>Zipcode :</ColumnOne>
                            <ColumnTwo>{selectedUser.address.zipcode}</ColumnTwo>
                        </Row>
                    </DataTable>

                </Top>
                {/* right Center/Middle */}
                <Center 
                    flex={6} 
                    justify="flex-start" 
                    align="center" 
                    flexDirection="column" 
                    padding="2% 3% 0 7%">
                    
                    {/* MAP CONTAINER */}
                    <MapContainer >
                        <GMap empLat={empLat} empLng={empLng}/>
                    </MapContainer>
                </Center>

                {/* BOTTOM MAP DATA LAT & LONG */}
                <Bottom 
                    flex={0.5} 
                    justify="center" 
                    align="flex-end" 
                    flexDirection="column" 
                >
                    <Row style={{width:"50%"}}>
                        <ColumnOne style={{fontSize:"0.8rem"}} >
                            Lat: 
                        </ColumnOne>
                        <ColumnTwo>
                            {empLat}
                        </ColumnTwo>
                        
                        <ColumnOne style={{fontSize:"0.8rem"}}>
                            Long : 
                        </ColumnOne>
                        <ColumnTwo>
                            {empLng}
                        </ColumnTwo>
                    </Row>
                </Bottom>

                {/* EXTRA SPACING FOR SMOOTHING/ CHAT BOX */}
                <Footer 
                    flex={1} justify="center" align="flex-end" flexDirection="column" >
                </Footer>
            </Right>     
        </Wrapper>
    </>
    )
}

export default UserInfo

//style
const Wrapper = styled(SmallContainer)`
    display:flex;
    justify-content:center;
    align-items:center;

   @media only screen and (max-width: 768px) {
        /* For mobile phones: */
            justify-content:flex-start;
            flex-direction: column;
        }
`;

// General components
const Top = styled(SmallContainer)`

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
            padding:0;

        }

`;
const Center = styled(SmallContainer)``;
const Bottom = styled(SmallContainer)``;
const Left = styled(SmallContainer)``;
const Right = styled(SmallContainer)`
    margin-left: 20px;
    border-left: 2px solid ${colors.gray};
    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
            margin:0;
            border:none;

        }

`;
const Footer = styled(SmallContainer)``;


const DataTable = styled(SmallContainer)``;
    

const Row = styled(SmallContainer)`
    display: flex;
    flex-wrap:nowrap;
    text-align:center;
    justify-content:center;
    align-items:center;
    font-size:1.2rem;
    font-weight:500;
    color:${colors.dark};
    min-height:40px;
    
`;
const ColumnOne = styled(SmallContainer)`
    flex:4;
    justify-content:flex-end;
    align-items:center;
    text-align: right;
    padding-right:5px;
    font-size:1.1rem;
    font-weight:400;
    color:${colors.grayDark};
    word-break:break-all;
`;
const ColumnTwo = styled(SmallContainer)`
    flex:6;
    justify-content:flex-start;
    align-items:center;
    padding-left:5px;
    text-align:left;
    font-size:1.1rem;
    font-weight:400;
    color:${colors.dark};
    word-break: break-all;
`;

const MapContainer = styled(SmallContainer)`
    border-radius:${borderRadius.radius40};
    min-width: 400px;
    min-height:200px;
    overflow: hidden;
    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        border-radius:${borderRadius.radius};

        }
`;