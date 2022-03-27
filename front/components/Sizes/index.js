import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Sizes(props) {
  return (
    <>
      <Container>
        <h2 className='text-center p-3'>Tamanho Masculino</h2>
        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'></Col>
          <Col className='bg-light border' xs='4'>
            Largura
          </Col>
          <Col className='bg-light border' xs='4'>
            Comprimento
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho P
          </Col>
          <Col className='bg-light border' xs='4'>
            48cm
          </Col>
          <Col className='bg-light border' xs='4'>
            68cm
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho M
          </Col>
          <Col className='bg-light border' xs='4'>
            50cm
          </Col>
          <Col className='bg-light border' xs='4'>
            70cm
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho G
          </Col>
          <Col className='bg-light border' xs='4'>
            52cm
          </Col>
          <Col className='bg-light border' xs='4'>
            73cm
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho GG
          </Col>
          <Col className='bg-light border' xs='4'>
            56cm
          </Col>
          <Col className='bg-light border' xs='4'>
            76cm
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho XXL
          </Col>
          <Col className='bg-light border' xs='4'>
            58cm
          </Col>
          <Col className='bg-light border' xs='4'>
            79cm
          </Col>
        </Row>

        <h2 className='text-center p-3'>Tamanho Feminino</h2>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'></Col>
          <Col className='bg-light border' xs='4'>
            Largura
          </Col>
          <Col className='bg-light border' xs='4'>
            Comprimento
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho P
          </Col>
          <Col className='bg-light border' xs='4'>
            40cm
          </Col>
          <Col className='bg-light border' xs='4'>
            61cm
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho M
          </Col>
          <Col className='bg-light border' xs='4'>
            44cm
          </Col>
          <Col className='bg-light border' xs='4'>
            66cm
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho G
          </Col>
          <Col className='bg-light border' xs='4'>
            47cm
          </Col>
          <Col className='bg-light border' xs='4'>
            69cm
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col className='bg-light border' xs='3'>
            Tamanho GG
          </Col>
          <Col className='bg-light border' xs='4'>
            50cm
          </Col>
          <Col className='bg-light border' xs='4'>
            71cm
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Sizes;
