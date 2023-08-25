import { View, Text, StyleSheet } from 'react-native';


function Subtitle({ children }) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}> {children}</Text>
        </View>
    );

}

export default Subtitle;

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 18,
        fontFamily: "regular",

        color: "#e2b497",
        textAlign: "center",


    },
    subTitleContainer: {
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 1,
        marginHorizontal: 12,
        marginVertical: 4,
    }
})