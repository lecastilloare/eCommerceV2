// // importing the component class from the react library
// // This will also give us the react lifecycle methods

// import { Component } from 'react';

// class Users extends Component {

//     constructor(props) {
//         // passing the props argument through the super class
//         // If this were a functional component we would be using the use state hook 
//         super(props);
//         this.state = {
//             users: []
//         }
//     }

//     // Now we want to focus on contacting our express application after the react life cycle method is mounted. 
//     // This is invoked immedietly after a component is inserted into the DOM, specifically it is called during the mounting phase
//     // of the react life cycle. Basically after the component is rendered.

//     componentDidMount() {
//         // we want to put invoke the fetch method in here because we want to make sure our data is loaded after the react app is rendered. 
//         // The fetch method will look to the proxy for where to look
//         // fetch returns a promise that is resolved into a response
//         fetch('/api/users')
//             .then(res => res.json())
//             .then(users => {
//                 this.setState({ users: users})
//             })
//     }


//     render() {
//         return (
//             <ul>
//                 {
//                     this.state.users.map(user => {
//                         return <li> Title: {user.title}, Description: {user.practice_description}, Number: {user.number}</li>
//                     })
//                 }
//             </ul>
//         )
//     }
// }

// export default Users;