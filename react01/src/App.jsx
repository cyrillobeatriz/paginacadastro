import { useState } from 'react'
import './custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Cadastro</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Facilidades</Nav.Link>
            <Nav.Link href="#pricing">Preços</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

   <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Digite seu e-mail</Form.Label>
          <Form.Control type="email" placeholder="fulano@..." />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Digite sua senha</Form.Label>
          <Form.Control type="password" placeholder="123456" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Digite seu endereço</Form.Label>
        <Form.Control placeholder="Avenida Vieira Souto, 98...." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Complemento</Form.Label>
        <Form.Control placeholder="Apartamento 502, bloco 2..." />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Cidade</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Estado</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Escolha</option>
            <option>Rio de Janeiro</option>
            <option>Niterói</option>
            <option>Petrópolis</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>CEP</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Button variant="dark" size="lg" type="submit">
        Enviar
      </Button>
    </Form>
    <br></br>
    <footer>

  <div className ="container-footer">
    <p>&copy; 2024 Seu Nome ou Empresa. Todos os direitos reservados.</p>
    
    <nav>

      <ul>
     <li><a href="#sobre">Sobre</a></li> 
     <li><a href="#servicos">Serviços</a></li>
     <li> <a href="#contato">Contato</a></li>
     <li> <a href="https://facebook.com" >Facebook</a></li>
     <li> <a href="https://twitter.com" >Twitter</a></li>
     <li> <a href="https://instagram.com"  >Instagram</a></li>
     </ul>
     
    </nav>
  </div>
</footer>
            </>
              )
}
              export default App
            
