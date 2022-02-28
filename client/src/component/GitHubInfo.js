import React,{Component} from 'react';
const axios = require('axios');


export default class GithubUser extends Component {
    constructor(){
        super();
        this.state = {
            githubAccount:""
        }
    }

    // async componentDidMount() {
     handleButtonClick() {
         axios.get('/').then((response) => {
            //  console.log(response);
            //  console.log(response.data);
            this.setState({
                githubAccount: response.data
            })

         })
           

    }

    render() {  
        return (
      
            <>
            <button onClick={this.handleButtonClick}> Get Github </button>
            <h1> The user is: {this.state.githubAccount} </h1>

            </>
    );
  }
  
  }
  
  
  
  