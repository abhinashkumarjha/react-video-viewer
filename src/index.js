import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// create a new component . this component should produce some html


const API_KEY='';// Your api key here. 


class App extends Component{

  constructor(props){
    super(props);

    this.state={ videos: [], selectedVideo:null };
    this.videoSearch('India');
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term: term}, (videos)=>{
      this.setState({ videos:videos,selectedVideo:videos[0]  });
      // same as this.setState({videos:videos});
    });
  }

  render(){
    return(
      <div>
        <SearchBar videoSearch={(term)=>{this.videoSearch(term)}}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}



// take this component generated HTML and put it on the page.
ReactDOM.render(<App/>, document.querySelector('.container'));
