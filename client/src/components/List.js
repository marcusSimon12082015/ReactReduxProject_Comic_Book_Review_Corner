import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ComicItem, PublisherItem, ReviewItem, BasicItem, CharacterItem } from './ItemTypes';

const components = {
  basic:BasicItem,
  comic:ComicItem,
  publisher:PublisherItem,
  review:ReviewItem,
  character:CharacterItem
};

const List = (props) => {
  let ListItemComponent = components[props.component.toLowerCase() || 'basic'];
  return(
    <Row>
        {props.list.length === 0 ? (
          <p>No Comics to display</p>
        )
        :
        (
          props.list.map((item) => {
            return <Col sm={4} key={item.id}><ListItemComponent key={item.id} {...item}/></Col>
          })
        )
      }
    </Row>
  );
};

export default List;
