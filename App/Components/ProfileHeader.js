import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';



class ProfileHeaderInner extends React.Component<PropsInner, State> {
  constructor(props: PropsInner) {
    super(props);
    this.state = {
      user: {
        events_count: 0,
        connections_count: 0,
      },
    };
  }


  async componentDidMount() {
    let data = await this.props.user.profile();
    this.props.changedUserData();
    this.setState({ user: data });
  }

  render() {
    let { events_count, connections_count } = this.state.user;
    let { status_setting, profileImage} =
      this.props.userData || {};


    return (
      <SafeAreaView style={[styles.profileHeader]}>

        <View style={[styles.mainSection]}>
            <Text style={styles.setting}>{name}</Text>
          </View>
          <Avatar source={profileImage} size={150} />
        </View>

        <View style={styles.statSection}>
          <Count num={events_count}>Events</Count>
          <Count num={connections_count}>Connections</Count>
        </View>
      </SafeAreaView>
    );
  }
}


const margin = 15;



const styles = StyleSheet.create({
  profileHeader: {
    backgroundColor: '#fff',
    paddingBottom: margin,
    width: 100 + '%',
  },
  profileHeaderShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  mainSection: {
    width: 100 + '%',
    height: 150,
    marginTop: 90,
    marginBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 39,
    fontWeight: '600',
    color: '#364047',
  },
  statSection: {
    paddingLeft: margin * 2,
    paddingRight: margin,
    flexDirection: 'row',
  },
});
