import React, { useState } from 'react'
import {Row, Col, Card, Container, Form, Button } from 'react-bootstrap'

const TodoForm = ({handelAdd, todoObject, setTodoObject, handleUpdate}) => {

  return (
    <>
      <section className='mb-5'>
        <Container>
            <Row>
                <Col  md={8} className='mx-auto'>
                    <Card className='px-4 py-4 mt-5'>
                        <h4 className='text-center'>Add Toto List</h4>
                    

                    <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control value={todoObject.title} onChange={(e) => setTodoObject({...todoObject, title: e.target.value})} type="text" placeholder="Write Title" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Add Todo</Form.Label>
                            <Form.Control value={todoObject.text} onChange={(e) => setTodoObject({...todoObject, text:e.target.value})} type="text" placeholder="Write a review" />
                        </Form.Group>
                        {todoObject.id === "" ? (
                            <Button onClick={handelAdd} variant="primary" type='submit'>Submit</Button>
                        ) : (
                            <Button onClick={handleUpdate} variant="primary" type='submit'>Update</Button>
                        )}
                        
                        
                    </Card>
                    </Col>
                    </Row>
            </Container>
      </section>
    </>
  )
}

export default TodoForm
