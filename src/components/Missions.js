import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const missionList = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
        key={ name }
      />
    ));

    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missionList}
      </div>
    );
  }
}

export default Missions;
