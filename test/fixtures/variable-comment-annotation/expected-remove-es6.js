import React, { Component } from 'react';

import { connect } from 'react-redux';
import GreetingComponent from './GreetingComponent';

const Greeting = connect(() => {}, () => {})(GreetingComponent);

export default Greeting;
