import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ComicsList = ({comics}) =>
{
    return(
      <Row>
      {comics.length === 0 ?
          (<p>No Comics to display</p>
          )
          :
          (
            comics.map((comic) => {
              return <Col sm={4} key={comic.id}>
                <ComicItem key={comic.id} {...comic} />
              </Col>
            })
          )
        }
        </Row>
    )
}
