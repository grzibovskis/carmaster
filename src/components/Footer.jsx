import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
align-item: center;
justify-content: center;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#e2e2e2" })}
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Payment = styled.img`
    width: 50%;
    float: left;
    
`;

const Footer = () => {
return (
    <Container>
    <Left>
        <Logo>CarMasters.</Logo>
        <Desc>
        Lee Iacocca's assistant general manager and chief engineer, Donald N. Frey was the head engineer for the T-5 project—supervising the 
        overall development of the car in a record 18 months[19]—while Iacocca himself championed the project as Ford Division general manager.
        [20] The T-5 prototype was a two-seat, mid-mounted engine roadster. This vehicle employed the German Ford Taunus V4 engine.
        </Desc>
        <SocialContainer>
        <SocialIcon color="3B5999">
            <FacebookIcon />
        </SocialIcon>
        <SocialIcon color="E4405F">
            <InstagramIcon />
        </SocialIcon>
        <SocialIcon color="55ACEE">
            <TwitterIcon />
        </SocialIcon>
        <SocialIcon color="E60023">
            <PinterestIcon />
        </SocialIcon>
        </SocialContainer>
    </Left>
    <Center>
        <Title>Useful</Title>
        <List>
        <ListItem>Help</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Insurance</ListItem>
        <ListItem>Sitemap</ListItem>
        <ListItem>Terms of use</ListItem>
        <ListItem>Complaints</ListItem>
        <ListItem>Parkers</ListItem>
        <ListItem>Best electric cars</ListItem>
        <ListItem>Best hybrid cars</ListItem>
        <ListItem>Privacy & Cookie policy</ListItem>
        </List>
    </Center>
    <Right>
        <Title>Contact</Title>
        <ContactItem>
        <RoomOutlinedIcon style={{marginRight:"10px"}}/> Latvia , Riga, Brivibas street 1
        </ContactItem>
        <ContactItem>
        <PhoneIcon style={{marginRight:"10px"}}/> +22222222
        </ContactItem>
        <ContactItem>
        <MailOutlineIcon style={{marginRight:"10px"}} /> contact@CarMasters.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
    </Right>
    </Container>
);
};

export default Footer;