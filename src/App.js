import React, { Component } from 'react';
import './App.css';
import GeneratedPassword from './components/generatePassword';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize the state
    this.state = {
      minValue: 0,
      maxValue: 16,
      step: 1,
      value: 0, // Initially set to minValue
      characterType: 'uppercase',
      randomPassword: Math.floor(Math.random() * 100),
    };

    // Bind methods
    this.PasswordLength = this.PasswordLength.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  PasswordLength(newValue) {
    // Update the value when slider changes
    this.setState({ value: newValue });
  }

  handleChange(event) {
    // Update the selected character type
    this.setState({ characterType: event.target.value });
  }

  render() {
    const { minValue, maxValue, step, value, characterType, randomPassword } = this.state;

    return (
      <div className="App">
        <h1>Password Generator</h1>
        <div className="generator-container">
          <div className="generated-password-container">
            <GeneratedPassword genPassword={randomPassword} />
          </div>
          <div className="password-constrains">
            <div className="slider-container">
              <span>{value}</span>
              <div className="slider">
                <Slider
                  step={step}
                  min={minValue}
                  max={maxValue}
                  onChange={this.PasswordLength}
                  value={value}
                />
              </div>
            </div>
            <div className="character-container">
              <div className="characters">
                <FormControl>
                  <FormLabel>Characters</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={characterType}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel value="uppercase" control={<Radio />} label="Uppercase" />
                    <FormControlLabel value="lowercase" control={<Radio />} label="Lowercase" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="special-characters">
                <label>Special characters</label>
                <RadioGroup name="use-radio-group" defaultValue="true">
                  <FormControlLabel value="true" label="Special character" control={<Radio />} />
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;