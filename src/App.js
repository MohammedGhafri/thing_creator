import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './comp/Header.js'
import Footer from './comp/Footer.js'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      thingList: [
        {
          id: 1,
          name: "Mohammed",
          type: "Student"
        },
        {
          id: 1,
          name: "Samer",
          type: "TA"
        },
      ],
      thing: "things"
    };
  };
  render() {
    return (
      <div className="mainPage">
        <Header count={this.state.thingList} />
        < ThingList count={this.state.thingList} />
        <Footer />

      </div>
    )
  }
};

class ThingForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      Type: ""
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }



  // Fix Render
  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      //     <label> Snack Name
      //         <input type="text" placeholder="name" onChange={this.handleChangeName}></input>
      //         <input type="text" placeholder="type"></input>
      //         <input type="submit" value="Add"></input>
      //     </label>
      // </form>
      <>
      <form onSubmit={this.handleSubmit} id="form">
        <label> ADD new member
          <input type="text" placeholder="Name" required onChange={this.handleChangeName}></input>
          <input type="text" placeholder="Type" required></input>
          <input type="submit" value="Add"></input>

        </label>
      </form>
      </>
    )
  }

  handleChangeName(event) {
    console.log("text entered to text input");
    let newName = event.target.value;
    this.setState({
      name: newName
    });
  }


  // ToDo
  // handleChangeType(){

  // }

  handleSubmit(event) {
    event.preventDefault();
    // alert(this.state.name);
    this.props.onSnackCreate(this.state);
  }
}

function ThingList(props) {
  // console.log(props.count[0].name)
  // props.count.map(elem => console.log(elem))
  // const a=document.getElementById("form")
  // console.log("ssss",a)

  return (
    <>
      <div>
        <ul>


          {props.count.map(elem => <li>{elem.name}</li>)}
        </ul>
      </div>
      <ThingForm onSnackCreate={(data) => props.snackCreated(data)} />

      {/* <form id="form">
        <label> ADD new member
          <input type="text" placeholder="Name" required></input>
          <input type="text" placeholder="Type" required></input>
          <input type="submit" value="Add"></input>

        </label>
      </form> */}
      {/* <Helper name={document.getElementById("form")}/> */}
    </>
  )
}

// function Helper(props){
//   console.log("peopsssssss",props)
//   return(<p></p>)

// }
// const a=document.getElementById("form")
// if (a){

//   a.addEventListener("submit",handle)
// };
// function handle(event){
//   event.preventDefault();
//   // event.preventDefault();
//   console.log("From Form")





export default App;
