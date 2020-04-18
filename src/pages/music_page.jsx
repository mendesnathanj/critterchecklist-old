import React from 'react';
import CollectiblesLayout from '../components/collectibles_layout';
import Card from '../components/card/card';
import { forceCheck } from 'react-lazyload';
import { musicSearch, filterByFound, filterByLive } from '../utils/utils';


class MusicPage extends React.Component {
  applyFilters(music) {
    const { filter } = this.props;

    music = musicSearch(music, filter.search);

    if (filter.liveOnly) music = filterByLive(music);
    if (filter.notFoundYet) music = filterByFound(music);

    return music;
  }

  applySorts(music) {
    music = music.sort((a, b) => ('' + a.name).localeCompare(b.name));
    return music;
  }

  render() {
    let music = this.applyFilters(this.props.music);
    music = this.applySorts(music);

    music = music.map(music => <Card key={music.id} collectible={music} toggle={this.props.toggleMusic} />);

    setTimeout(forceCheck, 0);

    return (
      <CollectiblesLayout>
        {music}
      </CollectiblesLayout>
    );
  }
}


export default MusicPage;
