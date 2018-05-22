import React, {Fragment, Component} from 'react';
//import Post from './components/post';
//import PostList from './components/postsList';
// import Timer from './components/timer';
// import RenderIf from "./common/renderIf";
//import Profile from "./components/profile/profile";
import  Manager from "./components/profile/manager";

class App extends Component{

    state = {
        showTimer: false,
        image: '/Cat03.jpg'
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

    onChangeImage = () => {
        this.setState({image: '/Cat03.jpg'});
    };

    onDelete = () => {
        this.setState({image: void 0})
    };

    onDefautImage = () => {
        this.setState({image:})
    }

    render(){
        return (
            <Fragment>
                 <Manager image={this.state.image}/>
                {/*<Timer time ={60} onTimeStop={this.showTotalTime} reverse autoStart />*/}
            </Fragment>
        )
    }
}

export default App;