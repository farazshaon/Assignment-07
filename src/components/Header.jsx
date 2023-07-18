import React from 'react'
import { Container } from 'react-bootstrap';
const Header = ({header}) => {
  return (
    <>
      <header className='bg-primary py-3'>
        <Container>
            <h5 className='text-white m-0'>{header}</h5>
        </Container>
        
      </header>
    </>
  )
}

export default Header
