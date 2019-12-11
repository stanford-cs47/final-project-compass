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


export default class HomeScreen extends React.Component {

	state = {
		loading: false,
	}

	static navigationOptions = {
		title: 'Kim Ngo', // hard-coded to Kim
		headerStyle: {
			backgroundColor: Colors.salmon,
		},
		headerTitleStyle: {
			fontFamily: 'lato-regular',
			fontWeight: '300'	//loads default font without this
        },
		headerTintColor: Colors.white,
		headerRight: (
			<SafeAreaView style = {{padding: 16}}>
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
			</SafeAreaView>

			<ScrollView showsVerticalScrollIndicator={false}>
      	<SafeAreaView style={[styles.nonTimelineSection]}>
	      <SafeAreaView style={[styles.profileHeader]}>

				<View style={{flexDirection: "row",alignItems: "center"}}>
          <Text style={styles.default_text}>PROFILE STATUS     </Text>
          <Text style={{ fontFamily: 'lato-black', fontSize: 15, color: '#FF727C'}}>EDITING</Text>
          <MaterialCommunityIcons name="menu-down" size={25} color="#FF727C"/>
          <Text style={{ fontFamily: 'lato-black', fontSize: 15, color: '#FF727C'}}>{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}</Text>
          <Image source={Images.KimProfilePic}  style={{width: 70, height: 70, borderRadius: 400/ 2}} />
	      </View>

				<ScrollView horizontal={true} style={styles.statSection}>

	        <View style={styles.count}>
	          <Text style={styles.default_text}>EVENTS</Text>
	          <View style={{alignItems:'center'}}>
              <Text style={styles.num}>32</Text>
            </View>
	        </View>
	        <View style={styles.count}>
	          <Text style={styles.default_text}>CONNECTIONS</Text>
	          <View style={{alignItems:'center'}}>
	            <Text style={styles.num}>6</Text>
            </View>
	        </View>
	      </ScrollView>
			</SafeAreaView>

			<SafeAreaView style={[styles.basicComponent]}>
	<Text style={styles.default_text}>PINNED EVENTS     </Text>
	<ScrollView horizontal={true}>
		<View style={styles.PinnedEventContainer}>
			<View style={{flexDirection: "row"}}>
				<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20}}>Got my first job!{' '}{' '}{' '}{' '} </Text>
				<Octicons name="pin" size={20} color="#fff"/>
			</View>
			<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20}}>24 Apr 2019</Text>
			<View style={styles.iconContainer}><AntDesign name="sound" size={20} color="#fff"/></View>
		</View>
		<View style={styles.PinnedEventContainer}>
			<View style={{flexDirection: "row"}}>
				<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20}}>Married!!{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '} </Text>
				<Octicons name="pin" size={20} color="#fff"/>
			</View>
			<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20}}>6 Feb 2019</Text>
			<View style={styles.iconContainer}><MaterialIcons name="photo-camera" size={20} color="#fff"/></View>
		</View>
		<View style={styles.PinnedEventContainer}>
			<View style={{flexDirection: "row"}}>
				<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20}}>Graduated HS!{' '}{' '}{' '}{' '}{' '} </Text>
				<Octicons name="pin" size={20} color="#fff"/>
			</View>
			<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', paddingLeft: 20}}>17 Jun 2017</Text>
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
			<Text style={{ fontFamily: 'lato-medium', fontSize: 15, color: '#fff', textAlign: 'center'}}>2017 </Text>
	</View>
</ScrollView>
</SafeAreaView>

</SafeAreaView>
<SafeAreaView style={[styles.TimelineSection]}>
      {
        this.state.fontLoaded ? (
          <SafeAreaView style={[styles.basicComponent]}>
            <Text style={styles.default_text}>MY TIMELINE     </Text>
            <View style={styles.yearContainer}>
                <Text style={styles.year_text}>2019</Text>
                <View style={styles.TimelineEventContainer}>
                <Text style={styles.timeline_title_text}>Celebrated 22nd birthday</Text>
                <Text style={styles.timeline_date_text}>Dec 26 2019</Text>
                </View>
                <View style={styles.TimelineEventContainer}>
                <Text style={styles.timeline_title_text}>Started working on first app</Text>
                <Text style={styles.timeline_date_text}>Feb 24 2019</Text>
                <Image source={require('./assets/quickvmerge.png')}  style={styles.timeline_image} />
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
                <View style={styles.append_media_button}><View style={{justiftyContent:"center", alignItems:"center"}}><MaterialIcons name="add" size={50} color="#fff"/></View></View>
                </View>

            </View>

          </SafeAreaView>

	      </SafeAreaView>
			</ScrollView>
		);
	}
}


const margin_for_top_navigation_bar = 110;
const margin_bw_component = 25;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
	}
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
	nonTimelineSection: {
    flex:1,
    backgroundColor: '#fff',
    elevation:15,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "#CCCCCC",
    shadowOpacity: 0.1,
    shadowRadius: 16,
    paddingBottom:margin_bw_component,
  },
  TimelineSection: {
      flex:2,
      backgroundColor: '#F9FAFE'
    },
  basicComponent: {
    paddingTop: margin_bw_component,
    paddingBottom: margin_bw_component,
    paddingLeft: margin_bw_component,
  },
  profileHeader: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: margin_for_top_navigation_bar,
      paddingBottom: margin_bw_component,
      width: 100 + '%',
  },
  statSection: {
    paddingTop: margin_bw_component,
    paddingLeft: margin_bw_component * 3,
    paddingRight: margin_bw_component,
    flexDirection: 'row',
  },
  statSectionComponent: {
    paddingTop: margin_bw_component,
    paddingLeft: margin_bw_component * 2,
    paddingRight: margin_bw_component,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  num: {
    fontFamily: 'lato-medium',
    paddingTop: margin_bw_component/16,
    color: '#000000',
    fontSize: 30,
  },
  count: {
    marginRight: 72,
  },
  default_text: {
    fontFamily: 'lato-black',
    fontSize: 15,
    color:'#000000',
    opacity:0.3,
  },
  PinnedEventContainer: {
  marginTop:margin_bw_component,
  paddingTop:15,
  paddingBottom:15,
  marginLeft:30,
  width: 190,
  backgroundColor:'#FF727C',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff',
  elevation:10,
  shadowOffset: { width: 5, height: 5 },
  shadowColor: "grey",
  shadowOpacity: 0.5,
  shadowRadius: 20,
},
ShortcutContainer: {
marginTop:margin_bw_component,
paddingTop:5,
paddingBottom:5,
marginLeft:30,
width: 80,
backgroundColor:'#FF727C',
borderRadius:10,
borderWidth: 1,
borderColor: '#fff',
opacity:0.9,
elevation:10,
shadowOffset: { width: 5, height: 5 },
shadowColor: "grey",
shadowOpacity: 0.5,
shadowRadius: 20,
},
iconContainer: {
    width: 40 * 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 20,
    paddingTop: 10,
    textAlign: 'center'
  },
  yearContainer: {
      width: 40 * 2,
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingTop: 10,
    },
    yearContainer: {
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: 20,
      },
      year_text: {
        fontFamily: 'lato-medium',
        fontSize: 15,
        color:'#000000',
        opacity:0.3,
        textAlign: 'center',
      },
      TimelineEventContainer: {
      marginTop:margin_bw_component,
      paddingTop:20,
      paddingBottom:20,
      borderRadius:18,
      width: 375,
      backgroundColor:'#fff',
    },
    timeline_title_text: {
      fontFamily: 'lato-medium',
      fontSize: 18,
      color:'#000000',
      marginLeft: 50,
    },
    timeline_date_text: {
      fontFamily: 'lato-light',
      fontSize: 15,
      color:'#000000',
      opacity:0.3,
      marginLeft: 50,
    },

    append_media_button: {
      padding: 5,
      height: 70,
      width: 70,
      borderRadius:140,
      backgroundColor:'#FF727C',
      position: 'absolute',
      bottom:10,
      right:35,
      elevation:10,
      shadowOffset: { width: 5, height: 5 },
      shadowColor: "grey",
      shadowOpacity: 0.9,
      shadowRadius: 10,
    },

    media_type_button: {
      padding: 5,
      height: 40,
      width: 40,
      borderRadius:140,
      backgroundColor:'#FF727C',
      elevation:10,
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
});
