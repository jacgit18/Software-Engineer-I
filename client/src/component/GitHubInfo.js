import React,{Component} from 'react';
const axios = require('axios');


const api = axios.create({
    baseUrl: 'http://localhost:3000/users/'
})

export default class GithubUser extends Component {
    constructor(){
        super();
        this.state = {
            users: [],
            githubAccount:""
        }
    }

    searchUser(){

    }

    // async componentDidMount() {
     handleButtonClick() {
        // axios.get('user/${searchUser()}').then((response) => {

            api.get('/').then((response) => {
             console.log(response.data);
            //  console.log(response.data);
            this.setState({
                users: response.data
            })

         })
           

    }

    render() {  
        return (
      
            <>
            <button onClick={this.handleButtonClick}> Get Github </button>
              {this.state.users.map(user => <h2 key={user.id}> {user.name}</h2>)} 

            </>
    );
  }
  
  }
  
  
  
  