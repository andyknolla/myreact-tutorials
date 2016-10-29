import React from 'react';
import ReactDOM from 'react-dom';

// import Footer from './Footer';
// import Header from './Header';

class Layout extends React.Component {
  render() {
    return (
      <h1>It works!</h1>
    );
  }
}
 const app = document.getElementById('app');

 ReactDOM.render(<Layout/>, app);
// export default class Layout extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "Welcome",
//     };
//   }
//
//   changeTitle(title) {
//     this.setState({title});
//   }
//
//   render() {
//     return (
//       <div>
//         <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
//         <Footer />
//       </div>
//     );
//   }
// }
