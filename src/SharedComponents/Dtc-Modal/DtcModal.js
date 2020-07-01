import React from 'react';
import Modal from 'react-bootstrap/Modal'


const DtcModal = (props) => {
    return (
        <div>           
            <Modal
                show={props.show}
                onHide={props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.title}
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {props.element}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {props.footer}
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DtcModal;