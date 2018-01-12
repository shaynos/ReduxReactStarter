import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const GOOGLE_API_KEY = 'AIzaSyA2MCa-PD_k6ExPqrnzltLm3O6PGkFGn2s';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = { videos: [] };

    YTSearch({key:GOOGLE_API_KEY, term: 'surf'}, (videos) =>{
      //this.setState({videos: videos});
      this.setState({ videos });
    });
  }

  render (){
    return (
      <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this components generated html and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
