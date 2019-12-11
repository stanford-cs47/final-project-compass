import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	Alert,
	Text,
	Image,
	FlatList,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import firebase from 'firebase';

import { Metrics, Colors, Images } from '../Themes';

import { MaterialCommunityIcons, AntDesign, Octicons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Platform } from '@unimodules/core';

export default class OtherProfile extends React.Component {

	state = {
		loading: false,
		andreaImageURL: null,
	}

	static navigationOptions = {
		title: 'Andrea',
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

	_simpleAlertHandler=()=>{
	//function to make simple alert
	alert('Now connected with Andrea');
}


	componentDidMount() {
		const users = firebase.storage().ref().child('Users');
		const andreaImage = users.child('andreadahl@stanford.edu').child('ProfilePic').child('andrea-circle.png');
		andreaImage.getDownloadURL().then((url) => { this.setState({ andreaImageURL: url }) }) ;
	}


	render() {
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<SafeAreaView style={[styles.nonTimelineSection]}>
						<SafeAreaView style={[styles.profileHeader]}>
							<View style={{ flexDirection: "row", alignItems: "center", height:70}}>
								<Text style={styles.default_text}>PROFILE STATUS
							</Text>
							<Text style={{ fontFamily: 'lato-regular', fontSize: 15, color: Colors.salmon }}>{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}
								</Text>
								<Text style={{ fontFamily: 'lato-regular', fontSize: 15, color: Colors.salmon }}>PUBLIC
							</Text>
								<Text style={{ fontFamily: 'lato-regular', fontSize: 15, color: Colors.salmon }}>{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}
								</Text>
								<Image source={{uri: this.state.andreaImageURL}} style={{ width:70, height: 70}} />
							</View>

							<ScrollView horizontal={true} style={styles.statSection}>
								<View style={styles.count}>
									<Text style={styles.default_text}>EVENTS</Text>
									<View style={{ alignItems: 'center' }}>
										<Text style={styles.num}>22</Text>
									</View>
								</View>
								<View style={styles.count}>
									<Text style={styles.default_text}>CONNECTIONS</Text>
									<View style={{ alignItems: 'center' }}>
										<Text style={styles.num}>45</Text>
									</View>
								</View>
							</ScrollView>
						</SafeAreaView>

						<SafeAreaView style={{marginTop: 10, marginBottom:70}}>
							<View style={{flexDirection: "row", justifyContent:"center"}}>
							<TouchableOpacity style={styles.connect_button} onPress={this._simpleAlertHandler}><Text style={styles.connect_button_text}>CONNECT</Text></TouchableOpacity>
							</View>
						</SafeAreaView>
						<SafeAreaView style={[styles.basicComponent]}>
							<Text style={styles.default_text}>PINNED EVENTS     </Text>
							<ScrollView horizontal={true}>
							<View style={styles.PinnedEventContainer}>
							<View style={{flexDirection: "row"}}>
							<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20}}>opened up my own studio{' '} </Text>
							<Octicons name="pin" size={20} color="#fff"/>
							</View>
							<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20}}>Nov 4 2019</Text>
							<View style={styles.iconContainer}><AntDesign name="sound" size={20} color="#fff"/></View>
							</View>
							<View style={styles.PinnedEventContainer}>
							<View style={{flexDirection: "row"}}>
							<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20}}>visited Ballet Royale Institute of Maryland! </Text>
							<Octicons name="pin" size={20} color="#fff"/>
							</View>
							<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20}}>Oct 6 2019</Text>
							<View style={styles.iconContainer}><MaterialIcons name="photo-camera" size={20} color="#fff"/></View>
							</View>
							<View style={styles.PinnedEventContainer}>
							<View style={{flexDirection: "row"}}>
							<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20}}>competitive dance programs in New York City{' '} </Text>
							<Octicons name="pin" size={20} color="#fff"/>
							</View>
							<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20}}>Jan 1 2019</Text>
							<View style={styles.iconContainer}><MaterialCommunityIcons name="format-quote-open" size={20} color="#fff"/></View>
							</View>
							</ScrollView>
						</SafeAreaView>

						<SafeAreaView style={[styles.basicComponent]}>
						<View style={{flexDirection: "row", justifyContent:'space-between'}}>
						<Text style={styles.default_text}>YOUR SHORTCUTS </Text>
						<View style={{ paddingRight:30}}>
						<Ionicons name="md-switch" size={20} color='#B2B2B2'/>
						</View>
						</View>
						<ScrollView horizontal={true}>
						<View style={styles.ShortcutContainer}>
						<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', textAlign: 'center'}}>2019</Text>
						</View>
						<View style={styles.ShortcutContainer}>
						<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', textAlign: 'center'}}>2018</Text>
						</View>
						<View style={styles.ShortcutContainer}>
						<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', textAlign: 'center'}}>2015 </Text>
						</View>
						</ScrollView>
						</SafeAreaView>

					</SafeAreaView>
					<SafeAreaView style={[styles.TimelineSection]}>

						<SafeAreaView style={[styles.basicComponent]}>
							<Text style={styles.default_text}>MY TIMELINE     </Text>
							<View style={styles.yearContainer}>
								<Text style={styles.year_text}>2019</Text>
								<View style={styles.TimelineEventContainer}>
			          <Text style={styles.timeline_title_text}>taking a class with the Dance Theatre of Harlem</Text>
			          <Text style={styles.timeline_date_text}>Dec 26 2019</Text>
			          </View>
								<View style={styles.TimelineEventContainer}>
			          <Text style={styles.timeline_title_text}>opened up my own jazz studio :)</Text>
			          <Text style={styles.timeline_date_text}>Nov 4 2019</Text>
			          <Image source={Images.BallerinaTimelinePic}  style={styles.timeline_image} />
			          </View>
								<View style={styles.TimelineEventContainer}>
								<Text style={styles.timeline_title_text}>visited Ballet Royale Institute of Maryland!</Text>
								<Text style={styles.timeline_date_text}>Oct 6 2019</Text>
								<Image source={Images.MarylandTimelinePic}  style={styles.timeline_image} />
								</View>
								<View style={styles.TimelineEventContainer}>
								<Text style={styles.timeline_title_text}>competitive dance programs in New York City</Text>
								<Text style={styles.timeline_date_text}>Jan 1 2019</Text>
								<Image source={Images.NYTimelinePic}  style={styles.timeline_image} />
								</View>
							</View>
							<View style={styles.yearContainer}>
								<Text style={styles.year_text}>2018</Text>
								<View style={styles.TimelineEventContainer}>
			          <Text style={styles.timeline_title_text}>Earned HS degree</Text>
			          <Text style={styles.timeline_date_text}>July 5 2018</Text>
			          </View>
							</View>
							<View style={styles.yearContainer}>
								<Text style={styles.year_text}>2017</Text>
								<View style={styles.TimelineEventContainer}>
									<Text style={styles.timeline_title_text}>Took calculus at communtity college </Text>
									<Text style={styles.timeline_date_text}>July 3 2017</Text>
									<View style={styles.append_media_button}>
										<View style={{ justiftyContent: "center", alignItems: "center" }}><MaterialIcons name="add" size={50} color="#fff" />
										</View>
									</View>
								</View>
							</View>
						</SafeAreaView>
					</SafeAreaView>
				</ScrollView>
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
	h1: {
		fontWeight: 'bold',
		color: '#fff',
	},
	nonTimelineSection: {
		flex: 1,
		backgroundColor: '#fff',
		elevation: 15,
		shadowOffset: { width: 5, height: 5 },
		shadowColor: "#CCCCCC",
		shadowOpacity: 0.1,
		shadowRadius: 16,
		marginBottom: margin_bw_component,
		marginTop: margin_for_top_navigation_bar,
	},
	TimelineSection: {
		flex: 2,
		backgroundColor: '#F9FAFE'
	},
	basicComponent: {
		marginTop: margin_bw_component,
		marginBottom: margin_bw_component,
		marginLeft: margin_bw_component,
	},
	profileHeader: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		marginTop: margin_for_top_navigation_bar,
		marginBottom: margin_bw_component,
		width: 100 + '%',
	},
	statSection: {
		marginTop: margin_bw_component,
		marginLeft: margin_bw_component * 3,
		marginRight: margin_bw_component,
		flexDirection: 'row',
	},
	statSectionComponent: {
		marginTop: margin_bw_component,
		marginLeft: margin_bw_component * 2,
		marginRight: margin_bw_component,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	num: {
		fontFamily: 'lato-medium',
		marginTop: margin_bw_component / 16,
		color: '#000000',
		fontSize: 30,
	},
	count: {
		marginRight: 72,
	},
	default_text: {
		fontFamily: 'lato-regular',
		fontSize: 15,
		color: '#000000',
		opacity: 0.3,
	},
	PinnedEventContainer: {
		marginTop: margin_bw_component,
		marginTop: 15,
		marginBottom: 15,
		marginLeft: 30,
		paddingTop: 15,
		paddingBottom: 15,
		width: 190,
		backgroundColor: Colors.salmon,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#fff',
		elevation: 10,
		shadowOffset: { width: 2, height: 2 },
		shadowColor: "grey",
		shadowOpacity: 0.5,
		shadowRadius: 5,
	},
	ShortcutContainer: {
		marginTop: margin_bw_component,
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 30,
		width: 80,
		backgroundColor: Colors.salmon,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#fff',
		opacity: 0.9,
		elevation: 10,
		shadowOffset: { width: 2, height: 2 },
		shadowColor: "grey",
		shadowOpacity: 0.5,
		shadowRadius: 5,
	},
	iconContainer: {
		width: 40 * 2,
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginLeft: 20,
		marginTop: 10,
		textAlign: 'center'
	},
	yearContainer: {
		width: 40 * 2,
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 10,
	},
	yearContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	year_text: {
		fontFamily: 'lato-medium',
		fontSize: 15,
		color: '#000000',
		opacity: 0.3,
		textAlign: 'center',
	},
	TimelineEventContainer: {
		marginTop: margin_bw_component,
		marginTop: 20,
		marginBottom: 20,
		borderRadius: 18,
		width: 375,
		backgroundColor: '#fff',
	},
	timeline_title_text: {
		fontFamily: 'lato-medium',
		fontSize: 18,
		color: '#000000',
		marginLeft: 50,
	},
	timeline_date_text: {
		fontFamily: 'lato-regular',
		fontSize: 15,
		color: '#000000',
		opacity: 0.3,
		marginLeft: 50,
	},

	append_media_button: {
		margin: 5,
		height: 70,
		width: 70,
		borderRadius: 140,
		backgroundColor: Colors.salmon,
		position: 'absolute',
		bottom: 10,
		right: 35,
		elevation: 10,
		shadowOffset: { width: 5, height: 5 },
		shadowColor: "grey",
		shadowOpacity: 0.9,
		shadowRadius: 10,
	},
	connect_button: {
		flex: 1,
	  alignItems: 'center',
		justifyContent: 'space-around',
		margin: 5,
		padding: 7,
		borderRadius: 140,
		backgroundColor: Colors.salmon,
		elevation: 5,
		shadowOffset: { width: 2, height: 2 },
		shadowColor: "grey",
		shadowOpacity: 0.9,
		shadowRadius: 2,
	},
	connect_button_text: {
			fontFamily: 'lato-regular',
			fontSize: 15,
			color: '#fff',
			textAlign: 'center',
	},

	media_type_button: {
		margin: 5,
		height: 40,
		width: 40,
		borderRadius: 140,
		backgroundColor: Colors.salmon,
		elevation: 10,
		shadowOffset: { width: 5, height: 5 },
		shadowColor: "grey",
		shadowOpacity: 0.9,
		shadowRadius: 10,
	},
	timeline_image: {
		width: 375,
		height: 150,
		resizeMode: 'cover',
		borderRadius: 18,
		marginLeft: 50,
		marginTop: 20,
	},
	timeline_image_container: {
		width: 375,
		height: 150,
		resizeMode: 'cover',
		borderRadius: 18,
		marginLeft: 50,
		marginTop: 20,
	},
})
