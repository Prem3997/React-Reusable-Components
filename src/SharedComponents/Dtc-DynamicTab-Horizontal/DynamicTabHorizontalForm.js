import React from 'react';
import {  Form, Row, Col } from 'react-bootstrap';

const DynamicTabHorizontalForm = ({handleInputChange,handleSubmit,state,arrTab}) => {
    
    return (
            <div style={{textAlign:'left'}} >
                    <Form onSubmit={handleSubmit} autoComplete="off">
                        <Form.Group as={Row} >
                            <Form.Label column="lg" >
                                Menu Id
                            </Form.Label>
                            <Col sm="10">
                                <input type="text" name="menuId" value={state.menuId} onChange={handleInputChange} className="form-control" id="menuIdInput" placeholder="Enter Menu Id" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} >
                            <Form.Label column="lg" >
                               Menu Name
                            </Form.Label>
                            <Col sm="10">
                            <input name="menuName" type="text" value={state.menuName} onChange={handleInputChange} className="form-control" id="menuNameInput" placeholder="Menu Name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} >
                            <Form.Label column="lg" >
                                Menu Url
                            </Form.Label>
                            <Col sm="10">                                
                                <input name="menuUrl" type="text" value={state.menuUrl} onChange={handleInputChange} className="form-control" id="menuUrlInput" placeholder="Router Link" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col >
                            <input type="submit" value="ADD TAB" className='form-submit-btn' />
                            </Col>
                        </Form.Group>
                    </Form>
        </div>
    );
}

export default DynamicTabHorizontalForm;