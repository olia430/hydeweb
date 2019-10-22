import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {createStore,applyMiddleware} from 'redux' 
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {counter} from './index.redux'
import {BrowserRouter,Route} from 'react-router-dom'
import HomePage from './container/homePage/homePage'
import LocationSelection from './container/locationSelection/locationSelection'
import Detail from './container/detail/detail'

const store = createStore(counter,applyMiddleware(thunk))


ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={HomePage}></Route>
            <Route path='/locationSelection' component={LocationSelection}></Route>
            <Route path='/detail' component={Detail}></Route>
          </div>        
        </BrowserRouter>,
    </Provider>),
    document.getElementById('root')
)



// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//   state = {
//     applications: [
//       {
//         id: 1,
//         name: "John Smith",
//         position: "Server",
//         applied: "03/15/16",
//         experience: 2,
//         availability: {
//           M: 2,
//           T: 2,
//           W: 1,
//           Th: 2,
//           F: 1,
//           S: 0,
//           Su: 0
//         },
//         questions: [
//           {
//             text: "Have you ever been convicted of a felony?",
//             answer: "No"
//           }
//         ]
//       },
//       {
//         id: 2,
//         name: "Jane Smith",
//         position: "Cook",
//         applied: "02/08/16",
//         experience: 4,
//         availability: {
//           M: 1,
//           T: 1,
//           W: 1,
//           Th: 1,
//           F: 0,
//           S: 0,
//           Su: 0
//         },
//         questions: [
//           {
//             text: "Have you ever been convicted of a felony?",
//             answer: "Yes"
//           }
//         ]
//       },
//       {
//         id: 3,
//         name: "David Jessup",
//         position: "Chef",
//         applied: "03/08/16",
//         experience: 2,
//         availability: {
//           M: 2,
//           T: 2,
//           W: 2,
//           Th: 2,
//           F: 2,
//           S: 0,
//           Su: 0
//         },
//         questions: [
//           {
//             text: "Are you authorized to work in the United States?",
//             answer: "Yes"
//           }
//         ]
//       },
//       {
//         id: 4,
//         name: "Clay vanSchalkwijk",
//         position: "Cook",
//         applied: "03/08/16",
//         experience: 1,
//         availability: {
//           M: 1,
//           T: 0,
//           W: 1,
//           Th: 0,
//           F: 1,
//           S: 0,
//           Su: 0
//         },
//         questions: [
//           {
//             text: "Are you authorized to work in the United States?",
//             answer: "Yes"
//           }
//         ]
//       }
//     ],
//     saved: []
//   };

//   onFavorite = app => {
//     const { saved } = this.state;
//     const check = saved.includes(app.id);
//     if (check) {
//       const newSaved = saved.filter(fav => fav !== app.id);
//       return this.setState({ saved: newSaved });
//     }
//     this.setState(currentState => ({
//       saved: [...currentState.saved, app.id]
//     }));
//   };

//   renderApplications() {
//     const { applications } = this.state;
//     return applications.map(app => (
//       <Application key={app.id} app={app} onFavorite={this.onFavorite} />
//     ));
//   }

//   renderFavs() {
//     const { saved, applications } = this.state;
//     const saveds = saved.map(id => applications.find(app => app.id === id));
//     return saveds.map(fav => <p key={fav.id}>{fav.name}</p>);
//   }

//   render() {
//     return (
//       <div>
//         <ul>{this.renderApplications()}</ul>
//         <h3>Favorites</h3>
//         {this.renderFavs()}
//       </div>
//     );
//   }
// }

// const Application = props => {
//   const { app, onFavorite } = props;
//   const handleFavorite = () => onFavorite(app);

//   return <li onClick={handleFavorite}>{app.name}</li>;
// };

// ReactDOM.render(<App />, document.getElementById("root"));



