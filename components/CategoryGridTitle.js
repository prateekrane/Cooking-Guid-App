import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

function CategoryGridTitle({ title, color, onPress }) {

    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable android_ripple={{ color: "#ccc" }} style={styles.button}
                onPress={onPress}
            >
                <View style={[styles.innercontainer]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 7,
        borderWidth: 1,
        overflow: Platform.OS === 'android' ? "hidden" : 'visible',



    },
    innercontainer: {
        flex: 1,
        paddingL: 16,
        justifyContent: "center",
        alignItems: "center",

    },
    button: {
        flex: 1,
    },
    title: {
        fontFamily: "bold",
        fontSize: 18,
    }
})