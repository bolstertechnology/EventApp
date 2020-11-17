import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { LinearGradient } from 'expo-linear-gradient';
import { Icon, Product } from '../components';

const { width } = Dimensions.get('screen');
import homeImages from '../constants/images/home';

export default class Events extends React.Component {
  renderSearch = () => {
    const { navigation } = this.props;
    const iconContent = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />

    return (
      <Input
      placeholderTextColor="white"
        right
        color="white"
        style={styles.search}
        iconContent={iconContent}
        placeholder="Events nearby you"
        onFocus={() => navigation.navigate('Search')}
      />
    )
  }
  
  renderTabs = () => {
    const { navigation } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Categories')}>
          <Block row middle>
            {/* <Icon name="grid" family="feather" style={{  }} /> */}
            <Text size={16} style={styles.tabTitle}>Events Nearby</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Deals')}>
          <Block row middle>
            {/* <Icon size={16} name="camera-18" family="GalioExtra" style={{  }} /> */}
            <Text size={16} style={styles.tabTitle}>Events By Followers</Text>
          </Block>
        </Button>
      </Block>
    )
  }

  renderProducts = () => {
    return (
      // <ScrollView
      //   showsVerticalScrollIndicator={false}
      //   contentContainerStyle={styles.products}>
        <Block flex style={styles.products}>
          <Product product={homeImages[0]} full />
          <Product product={homeImages[1]} full />
          <Product product={homeImages[2]} full />
          <Product product={homeImages[3]} full />
          <Product product={homeImages[4]} full />
        </Block>
      // </ScrollView>
    )
  }

  render() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.25, y: 1.1 }}
        locations={[0.2, 1]}
        colors={['#000000', '#000000']}
        style={[{flex: 1, paddingTop: theme.SIZES.BASE}]}>
      <ScrollView flex center style={styles.home}>
        {this.renderTabs()}
        {this.renderSearch()}
        {this.renderProducts()}
      </ScrollView></LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: theme.COLORS.BLACK,
    borderColor: theme.COLORS.WHITE
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    color: theme.COLORS.WHITE,
    lineHeight: 19,
    fontWeight: "500"
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    paddingHorizontal: 10,
  },
});