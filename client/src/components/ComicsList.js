import React from 'react';
import ComicItem from './ComicItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ComicsList extends React.Component {
  render(){
    return(
      <Row>
          {this.props.comics.length === 0 ? (
            <p>No Comics to display</p>
          )
          :
          (
            this.props.comics.map((comic) => {
              return <Col sm={4} key={comic.id}>
                <ComicItem
                  key={comic.id}
                  {...comic}/></Col>
            })
          )
        }
      </Row>
    )
  }
}

export default ComicsList;
