import React, { Component } from 'react';
import MyPhoto from "./sondes.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Profession: "FullStack Developer",
      fullName: "Zina Sondes",
      bio: "Computer sciences engineer",
      Image: MyPhoto,
      show: false
    }
  };
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        {this.state.show && (
          <h1>My Name is {this.state.fullName},<br></br>
            My Profession is {this.state.Profession} and i'm a {this.state.bio}
            <br></br>
            Here is my Photo
            <br></br>
            <img width={200} height={300}
              src={this.state.Image} alt='monphoto'></img>
            {this.state.check}
          </h1>)}
        <button type="button" onClick={this.handleClick}>
          Show Me
        </button>
        <br></br>
        <h4>time for is:
          componentDidMount(){ 
            setInterval(() => this.render(), 1000)
          }
        </h4>
      </div>
    )

  }
}
export default App;
