import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	Image,
	FlatList,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import { Metrics, Colors, Images } from '../Themes';

import { MaterialCommunityIcons, AntDesign, Octicons, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default class firstJobEvent extends React.Component {

	state = {
		loading: false,
	}

	static navigationOptions = {
		title: 'My First Job',
		headerStyle: {
			backgroundColor: Colors.salmon,
		},
		headerTitleStyle: {
			fontFamily: 'lato-regular',
			fontWeight: '300'	//loads default font without this
		},
		headerTintColor: Colors.white,
		headerRight: (
			<SafeAreaView style={{ margin: 16 }}>
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
				<ScrollView showsVerticalScrollIndicator={false}>
					<SafeAreaView style={[styles.TimelineSection]}>
						<SafeAreaView style={[styles.basicComponent]}>
							<Text style={styles.num}>Date</Text>
							<View style={styles.yearContainer}>
								<View style={styles.TimelineEventContainer}>
									<Text style={styles.timeline_title_text}>April 24 2019</Text>
									{/* <Text style={styles.timeline_date_text}>Dec 26 2019</Text> */}
								</View>
							</View>
                            <Text style={styles.num}>Media</Text>
							<View style={styles.yearContainer}>
								<View style={styles.TimelineEventContainer}>
                                    <Image source={Images.googleLogo} style={{ width:100, height: 100, marginLeft: 25}} />
									<Text style={styles.timeline_date_text}>July 5 2018</Text>
								</View>
							</View>
                            <Text style={styles.num}>Description</Text>
							<View style={styles.yearContainer}>
								<View style={styles.TimelineEventContainer}>
									<Text style={styles.timeline_title_text}>I got to fly to New York for an interview. They asked me behavioral, experience, and technical questions. A little scary but definitley exciting too!</Text>
									<Text style={styles.timeline_date_text}>December 3 2017</Text>
									{/* <View style={styles.append_media_button}>
										<View style={{ justiftyContent: "center", alignItems: "center" }}><MaterialIcons name="add" size={50} color="#fff" />
										</View>
									</View> */}
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
