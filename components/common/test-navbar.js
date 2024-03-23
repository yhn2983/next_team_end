import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons'
import LoginModal from '@/components/login-modal'

export default function TestNavbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">我的網站</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">首頁</Nav.Link>
          {/* other Nav.Links */}
        </Nav>
        <Nav>
          <PersonCircle size={36} onClick={openModal} />
          <LoginModal
            isOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
