import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';


function Welcome({ navigation }) {

    function presshandler() {
        return navigation.navigate('MealsCategories');
    }
    return (

        <View>
            <View style={{ alignItems: "center", marginTop: 50, borderBottomWidth: 1, borderColor: "#e5c6b3", width: "70%", marginLeft: 60, }}>
                <Text style={{ fontFamily: "outter", fontSize: 30, color: "#e5c6b3" }}>COOKING GUIDE!</Text>
            </View>
            <View>
                <Text style={styles.title}>An Ultimate Guide For Beginners</Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <Image
                    source={require('../assets/cook.png')}
                    style={styles.imgstyl}
                /></View>
            <View style={{ alignItems: "center", justifyContent: "center", }}>
                <TouchableOpacity onPress={presshandler}>
                    <View style={styles.txtOtter}>
                        <Text style={styles.txt}>Let's Go.</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Welcome;

const styles = StyleSheet.create({
    title: {
        fontFamily: "outter",
        fontSize: 25,
        color: "#e5c6b3",
        marginTop: 70,
        textAlign: "center",
    },
    txtOtter: {
        marginTop: 40,
        height: 50,
        width: 120,
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#e5c6b3",

    },
    txt: {
        textAlign: "center",
        fontSize: 20,
        color: "#e5c6b3",
        fontFamily: "outter",
    },
    imgstyl: {
        height: 300,
        width: 300,
        resizeMode: "contain",
        marginTop: 36,
    }
})