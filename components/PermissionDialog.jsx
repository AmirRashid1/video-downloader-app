import React from 'react';
import { View, Text, Button, Modal } from 'react-native';

const PermissionDialog = ({ visible, onRequestPermission, onCancel }) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onCancel}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                    <Text>Please grant permission to access storage.</Text>
                    <Button title="Grant Permission" onPress={onRequestPermission} />
                </View>
            </View>
        </Modal>
    );
};

export default PermissionDialog;
