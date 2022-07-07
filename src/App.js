import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import  TRReducer  from './components/TRReducer';

import './custom.css'
import HOCExample from './components/HOCExample';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/counter' element={<Counter/>} />
          <Route path='/fetch-data' element={<FetchData/>} />
          <Route path='/trtest' element={<TRReducer initialCount={12}/>} />
          <Route path='/hoc-example' element={<HOCExample />} />
        </Routes>
      </Layout>
    );
  }
}
