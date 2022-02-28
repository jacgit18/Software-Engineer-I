import React,{Component} from 'react';
// import { Router, Routes, Route } from "react-router-dom";
import { Card } from 'react-bootstrap';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import GitHubInfo from './component/GitHubInfo';

// import Home from './component/home';
// import Why from './component/Why';

const Child1 = (props) => (
  <>
    <h3>I am child 1 cleaner than having alot of divs</h3>
    {/* Anything that is passed between <Child1> and </Child1> */}
    {props.children}
  </>
);

const Child2 =  (props) => (
  <>
    <Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card>
  </>
);
const Child3 = (props) => (
  <>
    <h3>I am child 3</h3>
    {props.children}
  </>
);
const Child4 = () => (
  <>
    <h3>I am child 4</h3>
  </>
);


export default class App extends Component {
  render() {  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
       
            <GitHubInfo />
          </VStack>
          <Child1></Child1>
          <Child2></Child2>
          <Child3></Child3>
          <Child4></Child4>
        </Grid>
        {/* <Routes> */}
        {/* <Route path="/" element={<Home/>}/>
        <Route path="/why" element={<Why/>} /> */}
      {/* </Routes> */}
      </Box>
    </ChakraProvider>
  );
}

}



