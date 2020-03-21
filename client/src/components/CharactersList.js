import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharacterItem from './CharacterItem';

class CharactersList extends React.Component{
  render(){
    return(
      <Row>
          {this.props.characters.length === 0 ? (
            <div><p>No Comics to display</p></div>
          )
          :
          (
            this.props.characters.map((character) => {
              return <Col sm={4} key={character.id}>
                <CharacterItem
                  key={character.id}
                  {...character}/></Col>
            })
          )
        }
      </Row>
    )
  }
}
export default CharactersList;
