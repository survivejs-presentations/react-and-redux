// Import React
import React from "react";
import mapValues from "lodash/mapValues";
import TweetEmbed from "./tweet-embed";

// Import Spectacle Core tags
import {
  Appear,
  //BlockQuote,
  //Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  //Layout,
  Link,
  List,
  ListItem,
  //Markdown,
  //Quote,
  Slide
  //Table,
  //TableRow,
  //TableHeaderItem,
  //TableItem
  //Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  flux: require("../images/flux.png"),
  survivejs: require("../images/survivejs.png")
}, (v) => v.replace("/", ""));

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            React and Redux
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            The Problem of State
          </Heading>
          <List>
            <Appear><ListItem>Application state, UI state</ListItem></Appear>
            <Appear><ListItem>Where to push it?</ListItem></Appear>
            <Appear><ListItem>How to manipulate it?</ListItem></Appear>
            <Appear><ListItem>How to propagate changes to the UI?</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Image src={images.flux} margin="40px auto" height="324px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Redux Philosophy
          </Heading>
          <List>
            <Appear><ListItem>A guideline with utilities like <Link href="http://redux.js.org/docs/api/combineReducers.html">combineReducers</Link> to manage complexity</ListItem></Appear>
            <Appear><ListItem>Single tree for state</ListItem></Appear>
            <Appear><ListItem>Actions == Something happened</ListItem></Appear>
            <Appear><ListItem>Reducers == How application state changes (pure!)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} className="redux-flow">
          <TweetEmbed id="727821044308967425" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Redux Continued
          </Heading>
          <List>
            <Appear><ListItem>Time travel, undo, HMR support through design</ListItem></Appear>
            <Appear><ListItem><Link href="https://github.com/paularmstrong/normalizr">Normalize</Link> to make it easier to write reducers</ListItem></Appear>
            <Appear><ListItem>Extend through middleware and solutions around Redux</ListItem></Appear>
            <Appear><ListItem>Strong ecosystem</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Minimal <Link href="http://redux.js.org/">Redux</Link>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_01.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="http://redux.js.org/">Redux</Link> with a Store
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_02.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>0. Debug <Link href="https://codesandbox.io/s/nZMkVQ9mW">partially implemented Redux port</Link>. Why {"doesn't"} the interval or reset work as you might expect?</ListItem></Appear>
            <Appear><ListItem>1. Implement Redux style actions and types for the previous example*</ListItem></Appear>
            <Appear><ListItem>Solutions: <Link href="https://codesandbox.io/s/X6POBmKoW">0</Link>, <Link href="https://codesandbox.io/s/rk2jxB4RK">1</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Connecting Redux with React
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Connecting Using <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> 1/3
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_03.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Connecting Using <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> 2/3
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_04.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Connecting Using <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> 3/3
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_05.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> Recap
          </Heading>
          <List>
            <Appear><ListItem>Split application to <b>containers</b> (connect) and <b>presentational</b> components</ListItem></Appear>
            <Appear><ListItem>Push <code>connect</code> low in the hierarchy to improve performance</ListItem></Appear>
            <Appear><ListItem>Use <Link href="https://github.com/reactjs/reselect">reselect</Link> to deal with derived data</ListItem></Appear>
            <Appear><ListItem>Gotcha: <code>connect</code> is in pure mode by default, not always the right choice (routing)</ListItem></Appear>
            <Appear><ListItem>Know your tools (read their APIs and code)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>0. Replace the custom pair with <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> based implementation</ListItem></Appear>
            <Appear><ListItem>1. Push timer logic to a Redux middleware. <Link href="https://medium.com/@machadogj/timers-in-react-with-redux-apps-9a5a722162e8">Hint 1</Link>, <Link href="https://www.npmjs.com/package/redux-timer-middleware">hint 2</Link></ListItem></Appear>
            <Appear><ListItem>Solutions: <Link href="https://codesandbox.io/s/VOnYZGxvB">0</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Async Redux
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            redux-thunk
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Async with <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> 1/2
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_async_01.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Async with <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> 2/2
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_async_02.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> Recap
          </Heading>
          <List>
            <Appear><ListItem>Split query to stages (request/success/failure)</ListItem></Appear>
            <Appear><ListItem>Return a thunk and trigger stages as you call the backend</ListItem></Appear>
            <Appear><ListItem>React to stages at reducers and alter state</ListItem></Appear>
            <Appear><ListItem>Consider pushing the API client to a middleware (looser coupling)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            redux-saga
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://www.npmjs.com/package/redux-saga">redux-saga</Link> 1/2
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_async_03.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://www.npmjs.com/package/redux-saga">redux-saga</Link> 2/2
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_async_04.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://www.npmjs.com/package/redux-saga">redux-saga</Link> Recap
          </Heading>
          <List>
            <Appear><ListItem>Split query to stages (request/success/failure)</ListItem></Appear>
            <Appear><ListItem>Instead of returning a thunk, operate with generators</ListItem></Appear>
            <Appear><ListItem>Your browser might need a polyfill for generators to work</ListItem></Appear>
            <Appear><ListItem>Easier to test due to the looser coupling by default</ListItem></Appear>
            <Appear><ListItem><Link href="https://github.com/jfairbank/redux-saga-test-plan">redux-saga-test-plan</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>0. Set Up a Mock Response at <Link href="http://www.mocky.io/">mocky.io</Link>. <b>Important!</b> Set <code>Access-Control-Allow-Origin</code> to <code>{'https://codesandbox.io/'}</code>.</ListItem></Appear>
            <Appear><ListItem>1. Configure <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> and perform a query against the resource</ListItem></Appear>
            <Appear><ListItem>2. Implement a <Link href="https://www.npmjs.com/package/redux-saga">redux-saga</Link> variant*</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/">
            <Heading size={1}>
              SurviveJS
            </Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
        </Slide>

        <Slide transition={slideTransition} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made in Finland by
          </Heading>
          <Link href="https://twitter.com/bebraw">
            <Heading caps fit size={2} textColor="secondary">
              Juho Vepsäläinen
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
