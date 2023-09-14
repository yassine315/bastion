import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, ListGroup, InputGroup, FormControl } from 'react-bootstrap';

function SupplierForm() {
  const [formData, setFormData] = useState({
    name: '',
    severity: '',
    numberOfPeople: ''
  });

  const [supplyList, setSupplyList] = useState([
    { name: 'Bequille', severity: 'Asap', numberOfPeople: '7' },
    { name: 'Doliprane', severity: 'Asap', numberOfPeople: '10' },
    { name: 'Eau', severity: 'Urgent', numberOfPeople: '30' },
    { name: 'Couchette', severity: 'Urgent', numberOfPeople: '30' },
    { name: 'Veste dhiver', severity: 'Asap', numberOfPeople: '30' },
    { name: 'Matelas', severity: 'Urgent', numberOfPeople: '30' },
    { name: 'Chaise roulante', severity: 'Asap', numberOfPeople: '4' },
    { name: 'Internet', severity: 'Bientot', numberOfPeople: '30' },
  ]);

  const [status, setStatus] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleStatusChange = (e) => {
    const { name, value } = e.target;
    setStatus({
      ...status,
      [name]: value
    });
  };

  const addItem = () => {
    setSupplyList([...supplyList, formData]);
    setFormData({ name: '', severity: '', numberOfPeople: '' });
  };

  const handleSubmit = () => {
    console.log('Form Submitted', supplyList);
  };

  const submitStatus = () => {
    console.log('Status Submitted', status);
  };

  return (
    <Container className="supplier-list-validation">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {/* Existing Form */}
          {/* ... (Your existing form here) ... */}

          <h2 className={"width330"}>Supply List</h2>
          <ListGroup>
            {supplyList.map((item, index) => (
              <ListGroup.Item key={index}>
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    {`Product: ${item.name}, Severity: ${item.severity}, Number of People: ${item.numberOfPeople}`}
                  </InputGroup.Text><br/>
                  <FormControl
                    as="select"
                    custom
                    name={index.toString()}
                    onChange={handleStatusChange}
                    style={{ width: '200px' }}
                  >
                    <option value="" style={{ color: '#000' }}>Select Status</option>
                    <option value="Submitted" style={{ color: 'blue' }}>Submitted</option>
                    <option value="Pending" style={{ color: 'orange' }}>Pending</option>
                    <option value="Sent" style={{ color: 'green' }}>Sent</option>
                    <option value="Received" style={{ color: 'purple' }}>Received</option>
                    <option value="Denied" style={{ color: 'red' }}>Denied</option>
                  </FormControl><br/><br/>
                </InputGroup>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button variant="info" onClick={submitStatus}>
            Submit Status
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SupplierForm;