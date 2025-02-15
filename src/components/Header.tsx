import styled from "styled-components";
import logo from "../assets/logo-bras.svg";

const Container = styled.div`
  background: ${(props) => props.theme["gray-900"]};
  color: ${(props) => props.theme["gray-100"]};
  height: 4.5rem;
  display: flex;
  flex-direction: row;
  padding: 0 2rem;
  justify-content: space-between;
`;
const ListMenu = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;



  li {
    font-size: 0.8rem;
    display: inline;
    text-transform: uppercase;
    letter-spacing: 2px;
    height: 2rem;
    display: flex;
    align-items: center;
    
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-underline-offset: 8px;
      
    }
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  height: 100%;
`;



const Header: React.FC = () => {
  const itemMenu = [
    "Sobre",
    "Jovens",
    "Cultos",
    "Eventos",
    "Conteudo",
    "Contato",
  ];



  return (
    <Container>
      <img src={logo} style={{width: '8rem'}} alt="" />
      <ListMenu>
        {itemMenu.map((item) => (
          <li>
            <Link href="">{item}</Link>
          </li>
        ))}
      </ListMenu>
    </Container>
  );
};

export default Header;
