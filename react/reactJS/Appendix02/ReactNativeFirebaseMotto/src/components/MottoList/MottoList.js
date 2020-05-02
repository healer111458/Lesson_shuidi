import React, { Component } from 'react';
import ReactNative from 'react-native';
import Immutable from 'immutable';
import ListItem from '../ListItem';
import styles from './mottoStyles';
const { View, Text, ListView } = ReactNative;

class MottoList extends Component {
  constructor(props) {
    super(props);
    this.renderListItem = this.renderListItem.bind(this);
    this.listenForItems = this.listenForItems.bind(this);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => !Immutable.is(r1.get('id'), r2.get('id')),
    })
  }
  renderListItem(item) {
    return (
      <ListItem item={item} onDeleteMotto={this.props.onDeleteMotto} itemsRef={this.props.itemsRef} />
    );
  }  
  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      console.log(snap.val());
      if(snap.val() === null) {
        this.props.onGetMottos(Immutable.fromJS([]));
      } else {
        this.props.onGetMottos(Immutable.fromJS(snap.val()));  
      }     
    });
  }
  componentDidMount() {
    this.listenForItems(this.props.itemsRef);
  }
  render() {
    return (
      <View>
        <ListView
          style={styles.listView}
          dataSource={this.ds.cloneWithRows(this.props.mottos.toArray())}
          renderRow={this.renderListItem}
          enableEmptySections={true}
        />
      </View>
    );
  }
}

export default MottoList;
