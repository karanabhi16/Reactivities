import React,{Component} from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react'

class App extends Component {
state = {
  values : []
}

componentDidMount(){
  const newLocal = 'http://localhost:5000/api/values';
  axios.get(newLocal)
  .then((response) =>{
    this.setState({
      values : response.data
    })
  })
}

  render() {
    return (
      <div>
        <p></p>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Abhishek Page</Header.Content>
        </Header>
        <List>
            {
             this.state.values.map((value : any) => (
               <List.Item key={value.id}>
                 {value.name}
               </List.Item>
             ))
           }
        </List>
      </div>
    );
  }
 
}

export default App;
