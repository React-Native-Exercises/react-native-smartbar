/**
 * Created by WittBulter on 16/9/7.
 */

import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Me extends Component {
	// 构造
	constructor (props){
		super(props)
		// 初始状态
		this.state = {}
	}
	render (){
		return (
			<View>
				<Text>me page</Text>
			</View>
		)
	}
}