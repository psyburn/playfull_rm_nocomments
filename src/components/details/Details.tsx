import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { list } from '../../mock';

import { ICharacter } from '../../mockDataInterface';
import './details.css';

interface IDetailsComponent {
  character: ICharacter;
}

interface IRouteParams {
  id: string;
}

export default class Details extends React.Component<IDetailsComponent & RouteComponentProps<IRouteParams>> {
  public render() {
    // const { character } = this.props;
    const id = parseInt(this.props.match.params.id, 10);
    const character = list.results.find((item) => item.id === id)
    console.log(character);
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
