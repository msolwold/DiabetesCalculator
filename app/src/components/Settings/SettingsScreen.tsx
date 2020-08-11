import React, { useState, SetStateAction, useEffect } from "react";
import { View, Text, StyleSheet, Button, AsyncStorage } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface SettingsScreenProps {}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({}) => {
    const [bgCorrection, setBgCorrection] = useState<number>(-1);
    const [insulinRatio, setInsulinRatio] = useState<number>(-1);

    useEffect(() => {
        if (bgCorrection < 0 || insulinRatio < 0) _getSettings();
    });
    return (
        <View style={styles.container}>
            <View style={styles.field}>
                <Text>Correction: </Text>
                <TextInput
                    value={bgCorrection > 0 ? bgCorrection.toString() : ""}
                    onChangeText={(text) =>
                        _onChangeText(text, setBgCorrection)
                    }
                    style={{ width: 40, borderWidth: 0.2 }}
                />
                <Text> : 1 Unit</Text>
            </View>

            <View style={styles.field}>
                <Text>Ratio: </Text>
                <TextInput
                    value={insulinRatio > 0 ? insulinRatio.toString() : ""}
                    onChangeText={(text) =>
                        _onChangeText(text, setInsulinRatio)
                    }
                    style={{ width: 40, borderWidth: 0.2 }}
                />
                <Text> : 1 Unit</Text>
            </View>
            <Button title="Save" onPress={() => _saveSettings()} />
        </View>
    );

    function _onChangeText(
        text: string,
        setState: (value: SetStateAction<number>) => void
    ): void {
        let val = text != "" ? parseInt(text) : 0;
        if (val > 100) return; // ! Some cap on the value
        setState(val);
    }

    // TODO: Convert to API call later
    function _getSettings(): void {
        AsyncStorage.getItem("bgCorrection", (errors, result) => {
            if (result) setBgCorrection(parseInt(result));
            else setBgCorrection(0);
        });
        AsyncStorage.getItem("insulinRatio", (errors, result) => {
            if (result) setInsulinRatio(parseInt(result));
            else setInsulinRatio(0);
        });
    }

    function _saveSettings(): void {
        AsyncStorage.setItem("bgCorrection", bgCorrection.toString());
        AsyncStorage.setItem("insulinRatio", insulinRatio.toString());
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    field: {
        flexDirection: "row",
        alignContent: "stretch",
    },
});
