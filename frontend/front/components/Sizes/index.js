import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Sizes(props) {
  return (
    <>
      <Container>
        <h2 className='text-center p-3'>Tamanho Masculino</h2>
        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'></Col>
          <Col className='bg-light border' xs='3'>
            Largura
          </Col>
          <Col className='bg-light border' xs='3'>
            Comprimento
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho P
          </Col>
          <Col className='bg-light border' xs='3'>
            48cm
          </Col>
          <Col className='bg-light border' xs='3'>
            68cm
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho M
          </Col>
          <Col className='bg-light border' xs='3'>
            50cm
          </Col>
          <Col className='bg-light border' xs='3'>
            70cm
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho G
          </Col>
          <Col className='bg-light border' xs='3'>
            52cm
          </Col>
          <Col className='bg-light border' xs='3'>
            73cm
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho GG
          </Col>
          <Col className='bg-light border' xs='3'>
            56cm
          </Col>
          <Col className='bg-light border' xs='3'>
            76cm
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho XXL
          </Col>
          <Col className='bg-light border' xs='3'>
            58cm
          </Col>
          <Col className='bg-light border' xs='3'>
            79cm
          </Col>
        </Row>

        <h2 className='text-center p-3'>Tamanho Feminino</h2>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'></Col>
          <Col className='bg-light border' xs='3'>
            Largura
          </Col>
          <Col className='bg-light border' xs='3'>
            Comprimento
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho P
          </Col>
          <Col className='bg-light border' xs='3'>
            40cm
          </Col>
          <Col className='bg-light border' xs='3'>
            61cm
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho M
          </Col>
          <Col className='bg-light border' xs='3'>
            44cm
          </Col>
          <Col className='bg-light border' xs='3'>
            66cm
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho G
          </Col>
          <Col className='bg-light border' xs='3'>
            47cm
          </Col>
          <Col className='bg-light border' xs='3'>
            69cm
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho GG
          </Col>
          <Col className='bg-light border' xs='3'>
            50cm
          </Col>
          <Col className='bg-light border' xs='3'>
            71cm
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Sizes;
