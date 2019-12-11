import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	Image,
	FlatList,
	TouchableOpacity
} from 'react-native';

import { Metrics, Colors, Images } from '../Themes';

import { SearchBar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { Platform } from '@unimodules/core';


export default class MailScreen extends React.Component {

	state = {
		search: '',
		loading: false,
	}

	static navigationOptions = {
		title: 'Messages',
		headerStyle: {
			backgroundColor: Colors.salmon,
		},
		headerTitleStyle: {
			fontFamily: 'lato-regular',
			fontWeight: '300'	//loads default font without this
		},
		headerTintColor: Colors.white,
		headerRight: (
			<SafeAreaView style={{ padding: 16, marginRight: Platform.OS === 'ios' ? 16 : 0 }}>
				<Ionicons
					name="ios-settings"
					size={42}
					color={Colors.white}
				/>
			</SafeAreaView>
		),
	};



	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.messageContainer}>
					<TouchableOpacity>
						<View style={styles.contactContainer,{  flexDirection: "row", }}>

							<TouchableOpacity onPress={() => this.props.navigation.navigate("OtherProfile")}>
								<Image source={Images.AndreaProfilePic} style={styles.contactImage} />
							</TouchableOpacity>

							<View style={styles.TextContainer}>
								<Text style={styles.contactName}>Andrea Dahl</Text>
								<Text style={styles.messagePreview}>That's really cool! I'd love to hear more :) </Text>
							</View>

						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View style={styles.contactContainer,{  flexDirection: "row", }}>
							<TouchableOpacity>
								<Image source={Images.DonovanProfilePic} style={styles.contactImage} />
							</TouchableOpacity>

							<View style={styles.TextContainer}>
								<Text style={styles.contactName}>Donovan Tokuyama</Text>
								<Text style={styles.messagePreview}>Have you considered community college? It can be much more afforadable than...</Text>
							</View>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View style={styles.contactContainer,{  flexDirection: "row", }}>
							<TouchableOpacity>
								<Image source={Images.TyProfilePic} style={styles.contactImage} />
							</TouchableOpacity>
	
							<View style={styles.TextContainer}>
								<Text style={styles.contactName}>Ty Hunter</Text>
								<Text style={styles.messagePreview}>I heard there's a career fair coming up in our area, do you think you'll go? </Text>
							</View>
						</View>
					</TouchableOpacity>

				</View>
			</SafeAreaView>
		)
	}
}

const margin_for_top_navigation_bar = 0;
const margin_bw_component = 25;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
		backgroundColor: '#F9FAFE'
	},
	homeHeader: {
		width: Metrics.maxComponentWidth,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: Colors.salmon,
		marginBottom: Metrics.marginBottom
	},
	CompassLogo: {
		width: 122,
		height: 66,
		marginRight: Metrics.marginHorizontal
	},
	title: {
		height: 66,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontStyle: 'italic',
		fontFamily: Metrics.defaultFont,
		fontSize: 30,
		lineHeight: 32,
		color: Colors.white
	},
	loadingText: {
		fontSize: 40,
		color: '#fff'
	},
	h1: {
		fontWeight: 'bold',
		color: '#fff',
	},
	messageContainer: {
		marginLeft: 20,
		marginRight: 50,
		borderRadius: 18,
		backgroundColor: '#fff',
	},
	contactContainer:{
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 20
	},
	contactName: {
		fontFamily: 'lato-medium',
		fontSize: 18,
		color: '#000000',
		marginTop: 10,
		marginLeft: 10
	},
	messagePreview: {
		fontFamily: 'lato-regular',
		fontSize: 15,
		color: '#000000',
		opacity: 0.3,
		marginLeft: 10,
		marginRight: 10,
	},
	contactImage: {
		width: 70,
		height: 70,
		marginBottom: 20
	},
})
