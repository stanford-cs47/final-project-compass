import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { StreamApp } from 'expo-activity-feed';
import Count from './Count';
import { Avatar } from 'expo-activity-feed';
import type { FollowCounts } from 'getstream';
import type { AppCtx } from 'expo-activity-feed';

type Props = {};

export default function MajorEventsContainer(props: Props) {
  return (
    <StreamApp.Consumer>
      {(appCtx) => <MajorEventsContainerInner {...props} {...appCtx} />}
    </StreamApp.Consumer>
  );
}

type PropsInner = Props & AppCtx<UserData>;


class MajorEventsContainerInner extends React.Component<PropsInner, State> {
  constructor(props: PropsInner) {
    super(props);
    this.state = {
      user: {
        majorevents_type: 'audio', // default audio, but should be video, audio, text, image
      },
    };
  }

  async componentDidMount() {
    let data = await this.props.user.profile();
    this.props.changedUserData();
    this.setState({ user: data });
  }

  render() {

    return (
      <SafeAreaView style={[styles.MajorEventsContainerHeader]}>
      </SafeAreaView>
    );
  }
}

const margin = 15;

const styles = StyleSheet.create({
  MajorEventsContainerHeader: {
    backgroundColor: '#fff',
    paddingBottom: margin,
    width: 100 + '%',
  },
  MajorEventsContainerHeaderShadow: {
    shadowColor: Colors.salmon,
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
  majorEventsDetailsBox: {
    flex: 1,
  },
  majorEventsTitle: {
    fontSize: 39,
    fontWeight: '600',
    color: Colors.salmon,
  },
  majorEventsDate: {
    fontSize: 12,
    color: '#fff',
  },
  likedSection: {
    paddingLeft: margin * 2,
    paddingRight: margin,
    flexDirection: 'row',
  },
});
