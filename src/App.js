import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import MoviesList from "./components/moviesList";

// For Movies App

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <MoviesList />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

// For Counter App

// import Counters from "./components/counters";

// class App extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 0 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 },
//     ],
//   };

//   handleDelete = (counterId) => {
//     this.setState({
//       counters: this.state.counters.filter(
//         (counter) => counter.id != counterId
//       ),
//     });
//   };

//   handleIncreament = (counter) => {
//     const counters = this.state.counters;
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value += 1;
//     this.setState({ counters });
//   };

//   handleDecreament = (counter) => {
//     const counters = this.state.counters;
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value -= 1;
//     this.setState({ counters });
//   };

//   handleReset = () => {
//     const counters = this.state.counters.map((counter) => {
//       counter.value = 0;
//       return counter;
//     });
//     this.setState({ counters });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <Navbar
//           totalCounters={this.state.counters.filter((c) => c.value > 0).length}
//         />
//         <main className="container">
//           {/* <MoviesList /> */}
//           <Counters
//             counters={this.state.counters}
//             onReset={this.handleReset}
//             onDelete={this.handleDelete}
//             onIncreament={this.handleIncreament}
//             onDecreament={this.handleDecreament}
//           />
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// export default App;
