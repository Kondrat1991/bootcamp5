import React, {Fragment, Component} from 'react';
//import Post from './components/post';
//import PostList from './components/postsList';
import Timer from './components/timer';
import RenderIf from "./common/renderIf";

class App extends Component{

    state = {
        showTimer: false
    };

    switchTimer = () => {
        this.setState((prevState) => {
            return {
                showTimer: !prevState.showTimer
            }
        })
    };

    showTotalTime =(initialTime, stopTime) =>  {
        console.log((initialTime - stopTime));
    };

    render(){
        return (
            <Fragment>

                <Timer time ={60} onTimeStop={this.showTotalTime} reverse autoStart />
            </Fragment>
        )
    }
}

export default App;