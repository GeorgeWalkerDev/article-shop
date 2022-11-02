import React from 'react'
import {Col} from 'react-bootstrap'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'

const ContactRow = ({social, address, icon}) => {
  return (
    <Col className="my-2">
        {icon === 'facebook' ? <FaFacebookF className="mx-2" /> :
        icon === 'instagram' ?
        <FaInstagram className="mx-2"/> :
        <FaTwitter className="mx-2"/>
    }
        <button className="mx-2"> {social}</button>
        <span className="mx-2">{address}</span>
    </Col>
  )
}

export default ContactRow