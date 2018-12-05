import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import Lightbox from './modalPicture/Lightbox';
export { default as Lightbox } from './modalPicture/Lightbox';

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto 1fr;
  background-color: white;
  font-family: -apple-system, 'Poppins', sans-serif;
 
`  
const Sidebar = styled.div`
  grid-column: 1;
  position: fixed;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  background: #ed4438;
  width: 300px;
  height: 100%;
 
  > h2 {
    font-size: 25px;
    margin-left: 30px;
    margin-top: 110px;
    color: white;
  }
`
  const SidebarItem = styled.a`   
    font-weight: 800;
    color: white;
    margin-left: 30px;
    padding: 3px;
    text-decoration:none
    } 

    &:hover ${SidebarItem} {
      width: 250px;
      padding: 3px;
      background-color: white;
      color:black;
      text-decoration: none;
    } 
 `
const Header = styled.div`
  grid-column: 2;
  grid-row: 1;
  background-color: white;

  > h2 {
    font-size: 70px;
    margin-left: 50px;
    margin-top: 80px;
  } 
`
const Footer = styled.div`
  grid-column: 2;
  grid-row: 4;
  background-color: #e5e6e8;
  height: 100px;

  > p {
    font-size: 15px;
    margin-top: 50px;
    margin-left: 780px;
  }
`
const Content = styled.div`
  grid-column: 2;
  grid-row: 2;
  background-color: white;
  padding: 10px; 
` 
const Isi = styled.div`
  grid-column: 2;
  grid-row: 2;
  // background-color: palevioletred;

` 
const Section = styled.div`
  padding-top: 100px;
  padding-bottom: 3rem;
  max-width: 75rem;
  // margin-left: 45px;

  > h2 {
    font-size: 50px;
    padding: 5px;
    margin-left: 45px;
    margin-top: -90px;
    color: #ed4438;
  }

  > p {
    font-size: 17px;
    padding: 10px;
    margin: 20px;
    margin-left: 40px;
    margin-top: -20px;
    line-height: 1.6;
    color: black;
  }

  > hr {
    width:50px;
    border:5px solid red; 
    border-radius: 4px; 
    margin-left: 50px;
    // margin-top: -40px;
  }
`
const Images = styled.img`
  width:300px;
  height: 200px;
  webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
`

const Showcase = styled.div`
  display: grid;
  grid-template-columns: 480px 480px;
  grid-template-rows: auto 1fr;
  background-color: white;
  padding: 10px;
  margin-left: 40px; 
`

const Img = styled.img`
  width: 460px;
  height: 250px;
  padding: 5px;
  margin: 5px;
  opacity: .7;
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
  cursor:pointer;

  &:hover ${Img} {
    opacity: 1;
    cursor:pointer; 
  }
`
const Image = styled.img`
  width: 460px;
  height: 380px;
  padding: 5px;
  margin: 5px;
  opacity: .7;
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
  cursor:pointer;

  &:hover ${Image} {
    opacity: 1;
    cursor:pointer;
`

const Designers = styled.div`
  display: grid;
  grid-template-columns: 320px 320px 100px;
  grid-template-rows: auto 1fr;
  background-color: white;
  padding: 10px;
  margin-left: 40px; 
`

const Card = styled.div`
  background-color: #e5e6e8;
  transition: 0.3s;
  width: 300px;
`
const ContainerCard = styled.div`
  padding: 4px 20px;
`

const Form = styled.div`
  background-color: white;
  padding: 10px;
  margin-left: 40px; 
`
const Input = styled.input`
  width: 900px;
  padding: 15px;
  border: 1px solid #ccc;
  resize: vertical;
`
const Packages = styled.div`
  display: grid;
  grid-template-columns: 480px 480px;
  grid-template-rows: auto 1fr;
  background-color: white;
  padding: 10px 10px;
  margin-left: 40px; 
`
const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 95%;
  background-color: #f2f2f2;
`
const Th =styled.th` 
    padding: 20px;
    border: 1px solid #ddd;
    text-align: center;
    margin: 20px;
    background-color: #6d6d6d;
    color: white;
    font-size: 20px;

  ${props => props.primary && css`
      background-color: #ed4438;
  `}

`
const Td =styled.td` 
    padding: 20px;
    border: 1px solid #ddd;
    text-align: center;
    margin: 20px;
    background-color: #f2f2f2;
    color: black;
    font-size: 16px;

`

const Button = styled.button`
  background-color: #ed4438; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  ${props => props.primary && css`
    background: white;
    color: black;
  `}

  &:hover ${Button} {
    background-color: black; 
    color:white;
`

const ButtonMessage = styled.button`
  background-color: #ed4438; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 935px;

  &:hover ${ButtonMessage} {
    background-color: #f2f2f2; 
    color:black;
`

class App extends Component {
  state = { modalOpen: false };

  toggleModal = () => {
    this.setState(prev => ({
      modalOpen: !prev.modalOpen
    }));
  };

  render() {
    const {
      small,
      smallSrcSet,
      large,
      largeSrcSet,
      alt,
    } = this.props;
    const { modalOpen } = this.state;

    return (
        <Wrapper>
          <Sidebar>
            <h2>Company <br/> Name</h2>
            <br/>
            <br/>
            <br/>
            <SidebarItem href='#section1'>Home </SidebarItem><br/>
            <SidebarItem href='#section2'>Showcase </SidebarItem><br/>
            <SidebarItem href='#section3'>Services </SidebarItem><br/>
            <SidebarItem href='#section4'>Designers </SidebarItem><br/>
            <SidebarItem href='#section5'>Packages </SidebarItem><br/>
            <SidebarItem href='#section6'>Contact </SidebarItem><br/>
          </Sidebar>
          <Content>
            <ScrollableAnchor id={'section1'}>
            <Header>
              <h2>Interior Design</h2>
            </Header>
            </ScrollableAnchor>
            
            <Isi>
            
            <ScrollableAnchor id={'section2'}>
            <Section>
              <h2>Showcase.</h2>
              <hr/>
              <br/>
              <br/>
              <Showcase>
              <React.Fragment>
              <Image onClick={this.toggleModal} src={require('./assets/Interior1.jpg')} srcSet={require('./assets/Interior1.jpg')} alt={'Concrete meets bricks'}/> 
              {modalOpen && (<Lightbox large={require('./assets/Interior1.jpg')} onClose={this.toggleModal}/>)}
              <Image onClick={this.toggleModal} src={require('./assets/Interior2.jpg')} srcSet={require('./assets/Interior2.jpg')} alt={'Light, white and tight scandinavian design'}/>
              <Img onClick={this.toggleModal} src={require('./assets/Interior3.jpg')} srcSet={require('./assets/Interior3.jpg')} alt={'White walls with designer chairs'}/>
              <Img onClick={this.toggleModal} src={require('./assets/Interior4.jpg')} srcSet={require('./assets/Interior4.jpg')} alt={'Windows for the atrium'}/>
              <Img onClick={this.toggleModal} src={require('./assets/Interior5.jpg')} srcSet={require('./assets/Interior5.jpg')} alt={'Bedroom and office in one space'}/>
              <Img onClick={this.toggleModal} src={require('./assets/Interior6.jpg')} srcSet={require('./assets/Interior6.jpg')} alt={'Scandinavian design'}/>
              </React.Fragment>
              </Showcase>
            </Section> 
            </ScrollableAnchor>

            <ScrollableAnchor id={'section3'}>
            <Section> 
              <h2>Services.</h2>
              <hr/>
              <br/>
              <br/>
              <p>We are a interior design service that focus on what's best for your home and what's best for you!</p>
              <p>Some text about our services - what we do and what we offer. We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Section>
            </ScrollableAnchor>
            <ScrollableAnchor id={'section4'}>
            <Section>  
              <h2>Designers.</h2>
              <hr/>
              <br/>
              <br/>
              <p>The best team in the world.</p>
              <p>We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p><b>Our designers are thoughtfully chosen:</b></p>
              <Designers>
              <Card>
              <Images src={require('./assets/JaneDoeCEO.jpg')} alt="CEO"/>
              <ContainerCard>
                <h2><b>John Doe</b></h2>
                <p>CEO & Founder</p> 
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p> 
              </ContainerCard>
              </Card>
              <Card>
              <Images src={require('./assets/JaneDoeDesigner.jpg')} alt="Designers"/>
              <ContainerCard>
                <h2><b>Jane Doe</b></h2> 
                <p>Designer</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p> 
              </ContainerCard>
              </Card>
              <Card>
              <Images src={require('./assets/MikeRoss.jpg')} alt="Architech"/>
              <ContainerCard>
                <h2><b>Mike Ross</b></h2>
                <p>Architect</p> 
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p> 
              </ContainerCard>
              </Card>
              </Designers>
            </Section>
            </ScrollableAnchor>
            <ScrollableAnchor id={'section5'}>
            <Section>  
              <h2>Packages.</h2>
              <hr/>
              <br/>
              <br/>
              <p>Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              </p>
              <Packages>
              <Table>
              <tbody>
                <tr><Th>Basic</Th></tr>
                <tr><Td>Floorplanning</Td></tr>
                <tr><Td>10 hours support</Td></tr>
                <tr><Td>Photography</Td></tr>
                <tr><Td>20% furniture discount</Td></tr>
                <tr><Td>Good deals</Td></tr>
                <tr><Td><h2>$ 199</h2><br/>per room</Td></tr>
                <tr><Td><Button primary>Sign Up</Button></Td></tr>
              </tbody>  
              </Table>
              <Table>
              <tbody>
                <tr><Th primary> Pro </Th></tr>
                <tr><Td>Floorplanning</Td></tr>
                <tr><Td>50 hours support</Td></tr>
                <tr><Td>Photography</Td></tr>
                <tr><Td>50% furniture discount</Td></tr>
                <tr><Td>Great deals</Td></tr>
                <tr><Td><h2>$ 247</h2><br/>per room</Td></tr>
                <tr><Td><Button>Sign Up</Button></Td></tr>
              </tbody> 
              </Table>
              </Packages>
            </Section>
            </ScrollableAnchor>
            <ScrollableAnchor id={'section6'}>
            <Section>  
              <h2>Contact.</h2>
              <hr/>
              <br/>
              <br/>
              <p>Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!</p>
              <Form>
              <p>Nama</p>
              <Input  type="text" placeholder="" required />
              <p>Email</p>
              <Input type="text" placeholder="" required />
              <p>Message</p>
              <Input type="text" placeholder="" required/>
              <p/>
              <ButtonMessage>Send Message</ButtonMessage>
              </Form>
            </Section>
            </ScrollableAnchor>  
            </Isi>
          </Content>
          <Footer>
            <p>Powered by w3.css Edited by Verdian</p>
          </Footer>
        </Wrapper>
    );
  }
}

export default App;
