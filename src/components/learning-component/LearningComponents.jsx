import React , {Component} from 'react';
import FirstComponent from './components/learning-component/FirstComponent';
import SecondComponent from './components/learning-component/SecondComponent';
import ThirdComponent ,{ForthComponent,FivthComponent} from './components/learning-component/ThirdComponent';

export default class LearningComponents extends Component {
    render(){
      return (
          <div className="LearningComponents">
           My Hello World
          <FirstComponent/>
          <SecondComponent/>
          <ThirdComponent/>
          <ForthComponent/>
          <FivthComponent/>
        </div>
      );
    } 
  }

