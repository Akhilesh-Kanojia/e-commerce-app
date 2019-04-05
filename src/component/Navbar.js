import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component{
    render() {
      return (
          <div>
              <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                 <span className="fa fa-home navbar-brand"></span>
                </Link>
                <ul className="navbar-nav align-items-center">
                     <li className="nav-item ml-5">
                      <Link to="/" className="nav-link">Products</Link>
                     </li>
                </ul>
                 <Link to="/cart" className="ml-auto">
                 <ButtonContainer>
                   <span className="mr-2">
                   <i className="fas fa-cart-plus" />
                   </span>
                   my cart
                   </ButtonContainer>
                 </Link>
              </NavWrapper>
          </div>
      )
    }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .navlink{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`
// We can use here also and if we want other component then create component like button and import as we done
/*const ButtonContainer = styled.button`
 text-transform: capitalize;
 font-size: 1.4rem;
 background: transparent;
 border: 0.05rem solid var(--lightBlue);
 color: var(--lightBlue);
 border-radius: 0.5rem;
 padding: 0.2rem 0.5rem;
 cursor: pointer;
 margin: 0.2rem 0.5rem 0.2rem 0;
 transition: all 0.5s ease-in-out;
 &:hover{
   background: var(--lightBlue);
   color: var(--mainBlue);
 }
 &:focus{
   outline: none;
 }
`
*/