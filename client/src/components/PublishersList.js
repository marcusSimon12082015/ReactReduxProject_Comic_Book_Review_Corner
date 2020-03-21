import React from 'react';
import PublisherItem from './PublisherItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PublishersList extends React.Component {
  render(){
    return(
      <Row>
        {this.props.publishers.length === 0 ? (
          <div><p>No Publishers to display</p></div>
      )
      :
      (
        this.props.publishers.map((publisher) => {
          return <Col sm={4} key={publisher.id}>
            <PublisherItem
              key={publisher.id}
              {...publisher}/></Col>
            })
      )}
      </Row>
    )
  }
}
export default PublishersList;
