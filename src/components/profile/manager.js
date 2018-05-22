import React, {Component} from 'react';
import Profile from "./profile";
import Small from "./profileSmall";
import Nano from "./profileNano"
class Manager extends Component {

    state = {
        image: 'panda1.jpg'
    };

    render() {
        return (
            <div>

            <Profile image={this.state.image} onChangeImage={this.onChangeImage} onDelete={this.onDelete}/>
            <Small image={this.state.image} onChangeImage={this.onChangeImage}  onDelete={this.onDelete}/>

            <Nano image={this.state.image} onChangeImage={this.onChangeImage} onDelete={this.onDelete}/>


</div>

        )
    }
}

export default Manager;