import { useState } from 'react';
import { Navbar,
    NavbarBrand,
   Collapse,
   NavbarToggler,
   Nav,
   NavItem        
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import GrazianosLogo from '../app/assets/img/GrazianosLogo.png';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <Navbar color='light' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                 <img src={GrazianosLogo} alt='grazianos logo' 
                 style={{ width: '80%', height: 'auto' }} className='float-start' />
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar> 
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/HomePage'>
                        <div className='text-dark' style={{ fontFamily: 'Verdana', fontSize: 12, fontWeight: 'bold' }}> 
                                About
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                        <div className='text-dark' style={{ fontFamily: 'Verdana', fontSize: 12, fontWeight: 'bold' }}>
                                Hours & Location
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                        <div className='text-dark' style={{ fontFamily: 'Verdana', fontSize: 12, fontWeight: 'bold' }}>
                                Menus
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                        <div className='text-dark' style={{ fontFamily: 'Verdana', fontSize: 12, fontWeight: 'bold' }}>
                                Banquets & Parties
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                        <div className='text-dark' style={{ fontFamily: 'Verdana', fontSize: 12, fontWeight: 'bold' }}>
                                Catering
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                        <div className='text-dark' style={{ fontFamily: 'Verdana', fontSize: 12, fontWeight: 'bold' }}>
                                Order Online
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <div className='text-dark' style={{ fontFamily: 'Verdana', fontSize: 12, fontWeight: 'bold' }}>
                                Ship a Dressing!
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                        <div className='text-dark' style={{ fontFamily: 'Verdana', fontSize: 12, fontWeight: 'bold' }}>
                                Reservations
                            </div>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>        
        </Navbar>
    );
};

export default Header;