import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const GOOGLE_API_KEY = 'AIzaSyA2MCa-PD_k6ExPqrnzltLm3O6PGkFGn2s';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('mario');
  }

  videoSearch(term) {
    YTSearch({key:GOOGLE_API_KEY, term: term}, (videos) =>{
      //this.setState({videos: videos});
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render (){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
      <SearchBar  onSearchTermChanged={videoSearch} />
      <VideoDetail video = {this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    );
  }
}

// Take this components generated html and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
