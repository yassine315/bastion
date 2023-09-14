import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, ListGroup } from 'react-bootstrap';

function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    severity: '',
    numberOfPeople: ''
  });

  const [supplyList, setSupplyList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const addItem = () => {
    setSupplyList([...supplyList, formData]);
    setFormData({ name: '', severity: '', numberOfPeople: '' });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form Submitted', supplyList);
  };

  return (
    <Container className="supplies-request-form">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Supply Request Form</h1>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Product</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formSeverity">
              <Form.Label>Severity</Form.Label><br/>
              <Form.Control
                as="select"
                custom
                name="severity"
                style={{ width: '200px' }}
                value={formData.severity}
                onChange={handleChange}
              >
                <option value="" style={{ color: '#000' }}>Select a Severiry</option>
                <option value="ASAP">ASAP</option>
                <option value="Later">Later</option>
                <option value="Urgent">Urgent</option>
              </Form.Control><br/><br/>
            </Form.Group>
            <Form.Group controlId="formNumberOfPeople">
              <Form.Label>Number of People</Form.Label>
              <Form.Control
                type="number"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
              />
            </Form.Group>
            <div className='form-group'>
                <h2 className='width330'>Request List</h2>
                <Button variant="primary" onClick={addItem}>
                Add Item
                </Button>
            </div>
            <ListGroup className='inventory'>
                {supplyList.map((item, index) => (
                <ListGroup.Item key={index}>
                    {`Name: ${item.name}, Severity: ${item.severity}, Number of People: ${item.numberOfPeople}`}
                </ListGroup.Item>
                ))}
            </ListGroup>
            <Button variant="success" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RequestForm;