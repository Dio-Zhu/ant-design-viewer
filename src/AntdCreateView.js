import React, { Component } from 'react';
import {CreateView} from 'zzj-genview';
import AntdParser from './AntdParser';

export default class AntdCreateView extends Component{
    static defaultProps = {
        globalParser:AntdParser
    };
    render() {
        return <CreateView {...this.props} />
    }
}