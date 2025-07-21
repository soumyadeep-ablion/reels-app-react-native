import { View, StyleSheet, Image, TextInput, Pressable, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginNow = async () => {
        let item = { username, password };
        const formData = new FormData();
        formData.append('username', item.username);
        formData.append('password', item.password);

        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ablionnUeoexWIYx50-nRu?/hxopruPXxSd?q-uSItrgZp63NGDMws!ieJ=65J=6JM7i8hNoZXxVWD0NYaR/7eyWJQgDneFxBexdLFeq3DaXGc3uO7-UzxwqsH3yT3/NQ?h3O4UDT0DWc/wVGpCBLDjaxAeT4naMhnEL7D!QNcciRrcA0elZZaKZfaVc8wola4lRMfBdAQyWxVUusPLxW0uSpUarPN45H3lvp/5/Ih414YsIl9tL2/-wZoh6ZVubYovYY612Bh4e4utQMbWv3Ba1f?0JEpQXuDMdltMcD377O2Tp5NEY5YySrfmR01ondjmSw9Df?/!yHOX1PDTnZnL52V-isk60h!jybpW1EOPaJi2aAs=EO4-SSShBSwnYsLAi-8=/13z=G=l-a-GY/j24ndM6Zm0Pc=8oYWXNJlGf8Wcjmxnb?JELKbzdizvim7C-5c3MssI!MblU3?==v2Ies2bEEaeuQxmO8EAU3BQvWp!v-qQmMrXDNCfXAVq3HxVewC-wFgyEanXOhMkuprJCYVh!FwkueXd??4q3-Rlkn-JFmGehA9AVv3hZUE5DoeUEy-spSfhv?!=NCu1ldzUYKn1yvEHz3MUAsUgDilv1V?pcu7Fr=vAHQONRGAEtAapNjUSvb/n6unA-zY9IzrwMz0BtWzlat9YhSv0vge67WCzbKheoaKAECq84qmvl4aysUN2XcpbbDpOlCdrWNfl-/qBc-Iadzk1LSpPZ=L5Kk4niYV8EkhfJYNPEp91f8HhwTeRo-SHM0prvykwXLXaRKA5nN1RpAJR?I1ATgYERLQXTzbmqF/5GR/gYrfJO9Yx3VSPtj3fha/Lp6RcXd5qsG=P6nYwfTr7RYM3o/kuYHjN15dm0u!q0TVu0!vhX6AQb69toXv?mkSpy=bJEst4ilkG/MOPcvmj0sGl0enMX1gAl=F4BqOC9PmsOmO=h36=zGA?Yf8Q!Tw5wTWHbBLVac9wv5184n3t5m/ybgbGTsEexAm-wHL/nn!k8N-29HQbi02AXBWuHJ8A=?9JOtL9ItL?-vFJij2yhlOhqRa7O6URQvm3P9=LswJx6v8U5W-sB3VGRfX=cl-ZessygDnhzbtVFDP1T-BRw3y8HUReM!4tm1NM=vryf8gnSljTLB48Qd9zOuS!NhesM/tc2HF6MC4x!NCkoaAMDRqcqnDEmG6WyImV3xL!x2PvYQRb58Q?d6B8GqXjb1v=Skm!U7fDnu3UkVr/VyrbAltr--gI3n=TKgzD33Ra5yAPl0dn63UWFLL5!hQSPrt8oH2F?TIeM8qOobEzok28xeCZiI6g3BdVCVXB-!=4rm12tFKgPRM9aoG4tZtYLsoR5?XoClqUh4gRbfIh?Ogzv=QWmMl1re0/ZVOSAp/bnCnb8e!EtkBqKgo8/6zU?!lRafmPyCPP?VUOmIJgsrKxTpPqRiuu1d6W6!-a0SY-iZ6RmNiVhMmC9Cs0B7PsF/Ba4jMcnhBvLmmno1k7En2/D/4KOmSJG97oe2pf9/hokfjfpjpbUghU9zckFJmHFpLTfBGfMzVS3o?1fZcHzYfqEPTgpKhIQxR5!vw74yK8X?ftpAVjK0M8B9Sb0fxk4IYunY0fuBikuPOIbISmsXx5hYHLZGqf2=njAF=D?SMcjBo69444u9uMDfKOX77zj4waq2psteP9q9t1z8-UMS8M62knqzj4n8Lt1XpTmJiQukiAUNyfDxsbnj6Akax5Hf4RIznWul6AGb9v4!Hvq=x2-I1S5ipYM1eVfYCJV0mG5Aj2Q47ao2Mq93xqjvqCqo!fmmAT?jrzmSi6qA?sy2voWkanV5Z3dvE5no!d4V9JZ2qMjTw3A=poG/O/Lo//O2WrgquxNSQRiVAr7Az5VW5oQshtFor4NYN8mR/pV9kBnyPnYaMvPaoD5SLLd!bbLMznHQtC3Tln25JM/Dt9vKm7b7V=rvt7!OK=F=v/W/SgF4u1Kw9WJjb2yCPkfk-9cWblbwh-WBXx39SOy3nugv5qbx=KpjKK3LeaxTjcixtJjaXlQUS0N`, // your token
            },
            body: formData,
        };

        try {
            const response = await fetch(`http://192.168.1.116/webdev/reactecom/backend/api/user/login`, requestOptions);
            const data = await response.json();

            if (data.error === 0) {
                await AsyncStorage.setItem('user_id', data.user_id.toString()); // Save user_id in AsyncStorage
                navigation.navigate('reels'); // Navigate to the 'reels' screen
            } else if (data.error === 1) {
                console.error('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <View style={styles.loginContainer}>
            <Image source={require('../assets/images/background.png')} style={styles.bacImg} />
            <View style={styles.mainLoginBox}>
                <View style={styles.inputWrap}>
                    <Image source={require('../assets/images/user.jpg')} style={styles.inpImage} />
                    <TextInput
                        keyboardType="default"
                        placeholder="User Name"
                        style={styles.inpBox}
                        onChangeText={setUsername}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <Image source={require('../assets/images/lock.png')} style={styles.inpImage} />
                    <TextInput
                        keyboardType="default"
                        placeholder="Password"
                        style={styles.inpBox}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>
                <Pressable style={styles.submitBttn} onPress={loginNow}>
                    <Text style={styles.submitBttnText}>Login Now</Text>
                </Pressable>
                <Pressable style={{ marginTop: 40, width: '100%' }}>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Forgot Your Password ?</Text>
                </Pressable>
            </View>
            <View style={styles.otherOptions}>
                <Text style={{ color: '#949494', textAlign: 'center' }}>Or Connect With</Text>
                <View style={styles.buttonWrap}>
                    <Pressable style={styles.button}>
                        <Text style={{ color: '#fff' }}>
                            <FontAwesome name="facebook" size={20} color="#fff" /> Facebook
                        </Text>
                    </Pressable>
                    <Pressable style={styles.buttonGmail}>
                        <Text style={{ color: '#fff' }}>
                            <FontAwesome name="envelope-o" size={20} color="#fff" /> Gmail
                        </Text>
                    </Pressable>
                </View>
                <Pressable>
                    <Text style={{ color: '#949494', textAlign: 'center' }}>
                        Do you have an account? Sign up
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    bacImg: {
        position: 'absolute',
        width: '110%',
        right: -1,
        top: 1,
    },
    mainLoginBox: {
        width: '100%',
        paddingHorizontal: 40,
        marginTop: 80,
    },
    inputWrap: {
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingHorizontal: 23,
        paddingVertical: 13,
        borderRadius: 50,
        marginTop: 18,
    },
    inpImage: {
        width: 32,
        height: 32,
    },
    inpBox: {
        width: '80%',
    },
    submitBttn: {
        width: '100%',
        textAlign: 'center',
        paddingVertical: 20,
        backgroundColor: '#EABE30',
        borderRadius: 50,
        marginTop: 40,
    },
    submitBttnText: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500',
    },
    otherOptions: {
        width: '100%',
        padding: 40,
    },
    buttonWrap: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 30,
    },
    button: {
        width: 133,
        height: 50,
        backgroundColor: '#5599FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    buttonGmail: {
        width: 133,
        height: 50,
        backgroundColor: '#E15674',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
});
