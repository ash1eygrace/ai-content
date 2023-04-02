import { Nav, Navbar, Container } from 'react-bootstrap';
import React, { useContext } from 'react';
import ThemeContext from  '../common/ThemeContext';

const Navigation = React.memo(() => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div id="navigation">
      <Navbar expand="md">
        <Container>
          <Nav>
            <Navbar.Brand href="/">AshAI</Navbar.Brand>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="generators">Generators</Nav.Link>
              <Nav.Link onClick={handleThemeToggle}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
});

export default Navigation;
