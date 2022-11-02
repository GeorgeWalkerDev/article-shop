import React from 'react'
import {Row} from 'react-bootstrap'
import ContactRow from './ContactRow'

const Contact = () => {
  return (
    <Row className="address my-4">
        <ContactRow icon={'facebook'} social={'Facebook'} address={'Phone: +123 345 987'}/>
        <ContactRow icon={'instagram'} social={'Instagram'} address={'Address: Demo Street'}/>
        <ContactRow icon={'twitter'} social={'Twitter'} address={'Email: hello@article.com'}/>
    </Row>
  )
}

export default Contact