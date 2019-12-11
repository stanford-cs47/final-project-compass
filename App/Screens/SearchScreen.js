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

import { MaterialCommunityIcons, Octicons, Ionicons, Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { bold, underline } from 'ansi-colors';
import { Platform } from '@unimodules/core';


const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		name: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		name: 'Second Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		name: 'Third Item',
	},
];

function Item({ name }) {
	return (
		<View style={styles.item}>
			<Text style={styles.name}>{name}</Text>
		</View>
	);
}


export default class SearchScreen extends React.Component {

	state = {
		loading: false,
	}

	static navigationOptions = {
		title: 'Search',
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
					name='ios-settings'
					size={42}
					color={Colors.white}
				/>
			</SafeAreaView>
		),
	};

	updateSearch = search => {
		this.setState({ search });
	};


	render() {
		const { search } = this.state;
		return (
			<SafeAreaView style={styles.container}>
				<SearchBar
					placeholder='Type here...'
					onChangeText={this.updateSearch}
					value={search}
					containerStyle={{
						backgroundColor: Colors.white,
						borderWidth: 1,
						borderRadius: 16,
						borderColor: Colors.gray,
						borderTopColor: Colors.gray,
						borderBottomColor: Colors.gray
					}}
					inputContainerStyle={{ backgroundColor: Colors.white }}
				/>

				<View style={styles.buttonRowContainer}>
					<TouchableOpacity
						style={styles.iconButton}
						onPress={() => this.props.navigation.navigate("SkillSearch")}
					>
						<AntDesign
							name='staro'
							size={50}
							color={Colors.blue}
						/>
						<Text style={{ color: Colors.blue }}>Search by Skill</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.iconButton}
						onPress={() => this.props.navigation.navigate("NameSearch")}
					>
						<MaterialIcons
							name='person-outline'
							size={50}
							color={Colors.blue}
						/>
						<Text style={{ color: Colors.blue }}>Search by Name</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.iconButton}
						onPress={() => this.props.navigation.navigate("JobSearch")}
					>

						<Feather
							name='briefcase'
							size={50}
							color={Colors.blue}
						/>
						<Text style={{ color: Colors.blue }}>Search by Job</Text>

					</TouchableOpacity>
				</View>

				<Text style={styles.featuredTimelinesText}>Featured Timeline</Text>

				{/* Uncomment the 2 TouchablOpacity lines once you add Andrea's timeline screen */}
				<TouchableOpacity style={{flex: 1,}} onPress={() => this.props.navigation.navigate("OtherProfile")}>
				<SafeAreaView style={styles.container}>
					<ScrollView showsVerticalScrollIndicator={false}>
						<SafeAreaView style={[styles.nonTimelineSection]}>
							<SafeAreaView style={[styles.profileHeader]}>
								<View style={{ flexDirection: "row", alignItems: "center", height: 70 }}>
									<Text style={styles.num}>Andrea Dahl
							</Text>
									<Text style={{ fontFamily: 'lato-regular', fontSize: 15, color: Colors.salmon }}>{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}
									</Text>
									<Image source={Images.AndreaProfilePic} style={{ width: 70, height: 70 }} />
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

							<SafeAreaView style={[styles.basicComponent]}>
								<Text style={styles.default_text}>PINNED EVENTS     </Text>
								<ScrollView horizontal={true}>
									<View style={styles.PinnedEventContainer}>
										<View style={{ flexDirection: "row" }}>
											<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20 }}>opened up my own studio{' '} </Text>
											<Octicons name="pin" size={20} color="#fff" />
										</View>
										<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20 }}>Nov 4 2019</Text>
										<View style={styles.iconContainer}><AntDesign name="sound" size={20} color="#fff" /></View>
									</View>
									<View style={styles.PinnedEventContainer}>
										<View style={{ flexDirection: "row" }}>
											<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20 }}>visited Ballet Royale Institute of Maryland! </Text>
											<Octicons name="pin" size={20} color="#fff" />
										</View>
										<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20 }}>Oct 6 2019</Text>
										<View style={styles.iconContainer}><MaterialIcons name="photo-camera" size={20} color="#fff" /></View>
									</View>
									<View style={styles.PinnedEventContainer}>
										<View style={{ flexDirection: "row" }}>
											<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20 }}>competitive dance programs in New York City{' '} </Text>
											<Octicons name="pin" size={20} color="#fff" />
										</View>
										<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20 }}>Jan 1 2019</Text>
										<View style={styles.iconContainer}><MaterialCommunityIcons name="format-quote-open" size={20} color="#fff" /></View>
									</View>
								</ScrollView>
							</SafeAreaView>

							<SafeAreaView style={[styles.basicComponent]}>
								<View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
									<Text style={styles.default_text}>YOUR SHORTCUTS </Text>
									<View style={{ paddingRight: 30 }}>
										<Ionicons name="md-switch" size={20} color='#B2B2B2' />
									</View>
								</View>
								<ScrollView horizontal={true}>
									<View style={styles.ShortcutContainer}>
										<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', textAlign: 'center' }}>2019</Text>
									</View>
									<View style={styles.ShortcutContainer}>
										<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', textAlign: 'center' }}>2018</Text>
									</View>
									<View style={styles.ShortcutContainer}>
										<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', textAlign: 'center' }}>2015 </Text>
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
										<Text style={styles.timeline_title_text}>opened up my own jazz studio</Text>
										<Text style={styles.timeline_date_text}>Nov 4 2019</Text>
										<Image source={Images.BallerinaTimelinePic} style={styles.timeline_image} />
									</View>
									<View style={styles.TimelineEventContainer}>
										<Text style={styles.timeline_title_text}>visited Ballet Royale Institute of Maryland!</Text>
										<Text style={styles.timeline_date_text}>Oct 6 2019</Text>
										<Image source={Images.MarylandTimelinePic} style={styles.timeline_image} />
									</View>
									<View style={styles.TimelineEventContainer}>
										<Text style={styles.timeline_title_text}>competitive dance programs in New York City</Text>
										<Text style={styles.timeline_date_text}>Jan 1 2019</Text>
										<Image source={Images.NYTimelinePic} style={styles.timeline_image} />
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
				</TouchableOpacity>
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
	iconButton: {
		padding: 10,
		borderWidth: 2,
		borderColor: Colors.gray,
		borderRadius: 20,
		alignItems: 'center',
	},
	buttonRowContainer: {
		padding: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	featuredTimelinesText: {
		color: Colors.blue,
		fontSize: 18,
		fontWeight: 'bold',
	},
	item: {
		backgroundColor: Colors.gray,
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	name: {
		color: Colors.white,
		fontSize: 28,
		fontWeight: 'bold',
	},
	connectButton: {
		backgroundColor: Colors.salmon,
		borderRadius: 8,
		paddingHorizontal: 36,
	},

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
	iconButton: {
		padding: 10,
		borderWidth: 2,
		borderColor: Colors.gray,
		borderRadius: 20,
		alignItems: 'center',
	},
	buttonRowContainer: {
		padding: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	featuredTimelinesText: {
		color: Colors.blue,
		fontSize: 18,
		fontWeight: 'bold',
	},
	item: {
		backgroundColor: Colors.gray,
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	name: {
		color: Colors.white,
		fontSize: 28,
		fontWeight: 'bold',
	},
	connectButton: {
		backgroundColor: Colors.salmon,
		borderRadius: 8,
		paddingHorizontal: 36,
	},
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
		backgroundColor: '#F9FAFE',
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
		backgroundColor: '#F9FAFE',
	},
	basicComponent: {
		marginTop: margin_bw_component,
		marginBottom: margin_bw_component,
		marginLeft: margin_bw_component,
		marginRight: margin_bw_component,
	},
	profileHeader: {
		flex: 1,
		backgroundColor: '#F9FAFE',
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
{/* </TouchableOpacity> */ }



{/* <View style={styles.item}>
					<View style={{flexDirection:'row'}}>
						<Image
							source={Images.Donovan}
							style = {{width: '30%', height: '30%'}}
						/>
						<View style={{alignItems: 'center'}}>
							<Text style={styles.name}>Donovan Tokuyama</Text>
							<View style={styles.connectButton}>
								<Text style={{color: Colors.white}}>Connect</Text>
							</View>
						</View>
					</View>
					<Text
						style={{color: Colors.white, fontSize: 24, textDecorationLine: 'underline'}}>
						Compass cofounder
					</Text>
					<Text
						style={{color: Colors.white, fontSize: 10}}>
						Dropped out of college to perfect a social media plaform with the goal of helping highschool students pursuing non-traditional paths, allowing...
					</Text>
	  			</View>


				<FlatList>
					data={DATA}
					renderItem={({ item }) => <Item name={item.name} />}
					keyExtractor={item => item.id}
				</FlatList> */}
