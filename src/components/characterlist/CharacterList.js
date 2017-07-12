import React, { Component } from 'react';
import CharacterCard from '../charactercard/CharacterCard';
import _ from 'lodash';
import { Grid, Row } from 'react-bootstrap';
import './CharacterList.css';

import Loading from '../loading/Loading';

export class CharacterList extends Component {

  componentDidMount() {
    this.props.renderCharacters();
  }

  render() {

    let characters = <Loading />;

    if(!_.isEmpty(this.props.characters)){

      if(this.props.characters.characters.length){
        characters = this.props.characters.characters.map(
          (character) => <CharacterCard key={character.id} character={character} />
        );
      }else{
        characters = "No characters found!"
      }
      
    }

    return (
      <Grid className="listChars">
        <Row>
          {characters}
        </Row>
      </Grid>
    );
  }
}

export default CharacterList;