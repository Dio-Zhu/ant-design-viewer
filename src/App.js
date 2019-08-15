import React from 'react';
import './App.css';
import AntdCreateView from './AntdCreateView';
import {ViewPreviewer} from 'zzj-genview';

export default class App extends React.Component{
    render(){
        return <ViewPreviewer createView={AntdCreateView}/>;
    }
}
