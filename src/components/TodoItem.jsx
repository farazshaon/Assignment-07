import React from 'react'
import { Container, Card , Row, Col} from 'react-bootstrap'
import {FaEdit} from 'react-icons/fa'
const TodoItem = ({item, handleDelete, handleEdit}) => {



  return (
    <>
      <section className='mt-2'>
      <Container>
       
       <Row>
           <Col  md={8} className='mx-auto'>
               <Card className="bg-dark text-white py-3 px-3 ">
               <div className="toast-header">
                   <strong className="me-auto">{item.title}</strong>
                   <button type="button" size="sm" onClick={() => handleEdit(item.id)} className="btn text-white"> <FaEdit/> </button>
                   <button type="button" onClick={() => handleDelete(item.id)} className="btn-close bg-danger"></button>

               </div>
                   <Card.Text>
                       
                       {item.text }
                   </Card.Text>
               </Card>
             </Col>
           </Row>
     </Container>
      </section>
    </>
  )
}

export default TodoItem
