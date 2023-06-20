import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";


const initialMessages = [
    {
        id: 1,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: ' unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        image: require('../assets/ida.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/ida.jpg')
    }
];

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);


    const handleDelete = message => {
        // Delete the message from messages 
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <Screen>
            <FlatList
                data={messages} 
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => (
                    <ListItem 
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("Message selected", item)}
                    renderRightActions={() => 
                    <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {setMessages([
                    {
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/ida.jpg')
                    },
                ])}}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;