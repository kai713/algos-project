import React, { Component } from 'react';
import './App.css';
import './AppDark.css';

import AppControls from './components/molecules/AppControls';
import TopBar from './components/organisms/TopBar';
import AppDrawer from './components/organisms/AppDrawer';
import SortVisualizer from './components/organisms/SortVisualizer';
import Footer from './components/molecules/Footer';
import CodeTabs from "./algorithms/CodeTabs";
import CodeTabs_Q from "./algorithms/CodeTabs_Q"; // 👈 QuickSort табы


import BubbleSort, {
  BubbleSortKey,
  BubbleSortDesc
} from './algorithms/BubbleSort';
import QuickSort, {
  QuickSortKey,
  QuickSortDesc
} from './algorithms/QuickSort';
import Comparator from './components/organisms/Comparator/Comparator';

class App extends Component {
  state = {
    darkMode: false,
    array: [],
    arraySize: 10,
    trace: [],
    algorithm: null,
    appDrawerOpen: false
  };

  ALGORITHM = {
    'Bubble Sort': BubbleSort,
    'Quick Sort': QuickSort,
  };

  ALGORITHM_KEY = {
    'Bubble Sort': BubbleSortKey,
    'Quick Sort': QuickSortKey,
  };

  ALGORITHM_DESC = {
    'Bubble Sort': BubbleSortDesc,
    'Quick Sort': QuickSortDesc,
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateRandomArray = () => {
    // Generate pseudo-random number between 1 and max
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    // Generate an array of length max
    const array = Array(this.state.arraySize)
        .fill(0)
        .map(() => getRandomInt(this.state.arraySize * 5));

    this.setState(
        {
          array,
          trace: []
        },
        this.createTrace
    );
  };

  handleAlgorithmChange = (algorithm) => {
    this.setState({ algorithm }, this.generateRandomArray);
  };

  handleArraySizeChange = (size) => {
    size = Number(size);
    size = size > 100 ? 100 : size;
    size = size < 0 ? 0 : size;
    this.setState({ arraySize: size }, this.generateRandomArray);
  };

  createTrace = () => {
    const numbers = [...this.state.array];
    const sort = this.ALGORITHM[this.state.algorithm];
    if (sort) {
      const trace = sort(numbers);
      this.setState({ trace });
    }
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  toggleAppDrawer = () => {
    this.setState((prevState) => ({
      appDrawerOpen: !prevState.appDrawerOpen
    }));
  };

  render() {
    let theme = `App`;
    if (this.state.darkMode) theme += ` App_dark`;
    if (this.state.appDrawerOpen) theme += ` App_modal_open`;

    const colorKey = this.ALGORITHM_KEY[this.state.algorithm];
    const desc = this.ALGORITHM_DESC[this.state.algorithm];

    const controls = (
        <AppControls
            onGenerateRandomArray={this.generateRandomArray}
            algorithm={this.state.algorithm}
            onAlgorithmChange={this.handleAlgorithmChange}
            arraySize={this.state.arraySize}
            onArraySizeChange={this.handleArraySizeChange}
            onToggleDarkMode={this.toggleDarkMode}
            darkMode={this.state.darkMode}
        />
    );

    return (
        <div className={theme}>
          <TopBar
              drawerOpen={this.state.appDrawerOpen}
              toggleDrawer={this.toggleAppDrawer}
          >
            {controls}
          </TopBar>

          <AppDrawer
              open={this.state.appDrawerOpen}
              closeDrawer={this.toggleAppDrawer}
          >
            {controls}
          </AppDrawer>

          <main className="App__Body">
            <SortVisualizer
                array={this.state.array}
                trace={this.state.trace}
                colorKey={colorKey}
                desc={desc}
            />
            <></>
          </main>
          {this.state.algorithm === 'Bubble Sort' && <CodeTabs />}
          {this.state.algorithm === 'Quick Sort' && <CodeTabs_Q />}
          <Comparator/>


          <Footer />
        </div>
    );
  }
}

export default App;
