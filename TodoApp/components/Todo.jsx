import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Todo(props) {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          {/* For left items in row */}
          <View style={styles.square}></View>
          <View style={styles.itemText}>
            {/* Text in todo */}
            <Text style={styles.itemTitle}>Task :{props.text}</Text>
            {props.description && (
              <Text>{props.description}</Text>
            )}
          </View>
        </View>
        <View style={styles.circular}>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    item: {
      flex:1,
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
      },
      square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
      },

      itemText: {
        flex:0.5,
        maxWidth: '80%',
        flexDirection:'column',
      },
      itemTitle:{
        fontWeight:'bold',
      },
      itemDescription:{

      },
      circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
      },
});

