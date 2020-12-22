import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

const Comment = () => {
    return (       
        <Row className='pt-5'>
            <Col sm={1} md={1}>
                <Image  roundedCircle className='image'/>
            </Col >
            <Col>
                <h5>Lorem, ipsum.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, amet!</p>
            </Col>
        </Row>        
    )
}

export default Comment
