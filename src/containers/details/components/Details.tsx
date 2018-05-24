import * as React from 'react';

import { ICharacter } from '../../../dataInterface';
import './details.css';

interface IDetailsComponent {
  character: ICharacter;
}

export default class Details extends React.Component<IDetailsComponent> {
  public render() {
    const { character } = this.props;
    return character && <div>
        <div className='Details-Avatar'>
          <img src={character.image} />
        </div>
        <div className='Details-List'>
          <div><span className='Details-List-Label'>Name:</span><span>{character.name}</span></div>
          <div><span className='Details-List-Label'>Species:</span><span>{character.species}</span></div>
          <div><span className='Details-List-Label'>Gender:</span><span>{character.gender}</span></div>
          <div><span className='Details-List-Label'>Location:</span><span>{character.location.name}</span></div>
        </div>
      </div>;
  }
}
