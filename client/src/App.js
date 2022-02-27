import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
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


export default class App extends React.Component {
  render() {  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
          <Child1></Child1>
          <Child2></Child2>
          <Child3></Child3>
          <Child4></Child4>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

}



