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
                {/*<Timer time="5" onTimeOut={this.switchTimer} />*/}
                {/*<button onClick={this.switchTimer}>Переключить таймер</button>*/}
                {/*<RenderIf condition={this.state.showTimer}>*/}
                    {/*<Timer time="6000" step="2" autoStart/>*/}
                {/*</RenderIf>*/}
                {/*<Timer time='0' onTimeStop={this.showTotalTime} reverse={false} autoStart/>*/}

                <Timer time ={60} onTimeStop={this.showTotalTime} reverse autoStart />
            </Fragment>
        )
    }
}

export default App;