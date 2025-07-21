import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image, Alert, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

export default function Profile() {
    const [profilePhoto, setProfilePhoto] = useState("");
    const [profileDetails, setProfileDetails] = useState(null);
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigation = useNavigation();

    const handelGoBack =()=> {
        navigation.goBack();
    }

    const edited = async () => {
        try {
            const tokenString = await AsyncStorage.getItem("user_id");
            if (!tokenString) {
                console.error("No user_id found in AsyncStorage");
                return;
            }

            const response = await fetch(
                `http://192.168.1.116/webdev/reactecom/backend/api/profileDetails/${tokenString}`,
                {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ablionnUeoexWIYx50-nRu?/hxopruPXxSd?q-uSItrgZp63NGDMws!ieJ=65J=6JM7i8hNoZXxVWD0NYaR/7eyWJQgDneFxBexdLFeq3DaXGc3uO7-UzxwqsH3yT3/NQ?h3O4UDT0DWc/wVGpCBLDjaxAeT4naMhnEL7D!QNcciRrcA0elZZaKZfaVc8wola4lRMfBdAQyWxVUusPLxW0uSpUarPN45H3lvp/5/Ih414YsIl9tL2/-wZoh6ZVubYovYY612Bh4e4utQMbWv3Ba1f?0JEpQXuDMdltMcD377O2Tp5NEY5YySrfmR01ondjmSw9Df?/!yHOX1PDTnZnL52V-isk60h!jybpW1EOPaJi2aAs=EO4-SSShBSwnYsLAi-8=/13z=G=l-a-GY/j24ndM6Zm0Pc=8oYWXNJlGf8Wcjmxnb?JELKbzdizvim7C-5c3MssI!MblU3?==v2Ies2bEEaeuQxmO8EAU3BQvWp!v-qQmMrXDNCfXAVq3HxVewC-wFgyEanXOhMkuprJCYVh!FwkueXd??4q3-Rlkn-JFmGehA9AVv3hZUE5DoeUEy-spSfhv?!=NCu1ldzUYKn1yvEHz3MUAsUgDilv1V?pcu7Fr=vAHQONRGAEtAapNjUSvb/n6unA-zY9IzrwMz0BtWzlat9YhSv0vge67WCzbKheoaKAECq84qmvl4aysUN2XcpbbDpOlCdrWNfl-/qBc-Iadzk1LSpPZ=L5Kk4niYV8EkhfJYNPEp91f8HhwTeRo-SHM0prvykwXLXaRKA5nN1RpAJR?I1ATgYERLQXTzbmqF/5GR/gYrfJO9Yx3VSPtj3fha/Lp6RcXd5qsG=P6nYwfTr7RYM3o/kuYHjN15dm0u!q0TVu0!vhX6AQb69toXv?mkSpy=bJEst4ilkG/MOPcvmj0sGl0enMX1gAl=F4BqOC9PmsOmO=h36=zGA?Yf8Q!Tw5wTWHbBLVac9wv5184n3t5m/ybgbGTsEexAm-wHL/nn!k8N-29HQbi02AXBWuHJ8A=?9JOtL9ItL?-vFJij2yhlOhqRa7O6URQvm3P9=LswJx6v8U5W-sB3VGRfX=cl-ZessygDnhzbtVFDP1T-BRw3y8HUReM!4tm1NM=vryf8gnSljTLB48Qd9zOuS!NhesM/tc2HF6MC4x!NCkoaAMDRqcqnDEmG6WyImV3xL!x2PvYQRb58Q?d6B8GqXjb1v=Skm!U7fDnu3UkVr/VyrbAltr--gI3n=TKgzD33Ra5yAPl0dn63UWFLL5!hQSPrt8oH2F?TIeM8qOobEzok28xeCZiI6g3BdVCVXB-!=4rm12tFKgPRM9aoG4tZtYLsoR5?XoClqUh4gRbfIh?Ogzv=QWmMl1re0/ZVOSAp/bnCnb8e!EtkBqKgo8/6zU?!lRafmPyCPP?VUOmIJgsrKxTpPqRiuu1d6W6!-a0SY-iZ6RmNiVhMmC9Cs0B7PsF/Ba4jMcnhBvLmmno1k7En2/D/4KOmSJG97oe2pf9/hokfjfpjpbUghU9zckFJmHFpLTfBGfMzVS3o?1fZcHzYfqEPTgpKhIQxR5!vw74yK8X?ftpAVjK0M8B9Sb0fxk4IYunY0fuBikuPOIbISmsXx5hYHLZGqf2=njAF=D?SMcjBo69444u9uMDfKOX77zj4waq2psteP9q9t1z8-UMS8M62knqzj4n8Lt1XpTmJiQukiAUNyfDxsbnj6Akax5Hf4RIznWul6AGb9v4!Hvq=x2-I1S5ipYM1eVfYCJV0mG5Aj2Q47ao2Mq93xqjvqCqo!fmmAT?jrzmSi6qA?sy2voWkanV5Z3dvE5no!d4V9JZ2qMjTw3A=poG/O/Lo//O2WrgquxNSQRiVAr7Az5VW5oQshtFor4NYN8mR/pV9kBnyPnYaMvPaoD5SLLd!bbLMznHQtC3Tln25JM/Dt9vKm7b7V=rvt7!OK=F=v/W/SgF4u1Kw9WJjb2yCPkfk-9cWblbwh-WBXx39SOy3nugv5qbx=KpjKK3LeaxTjcixtJjaXlQUS0N`, // your token
                    },
                }
            );
            const data = await response.json();

            setProfileDetails(data);
            setProfilePhoto(data?.profileDetails?.user_image);
            setName(data?.profileDetails?.name);
            setUserName(data?.profileDetails?.username);
            setEmail(data?.profileDetails?.email);
            setPhone(data?.profileDetails?.phone);
        } catch (error) {
            console.error("Error fetching profile details:", error);
        }
    };

    useEffect(() => {
        edited();
    }, []);

    const takePhoto = async () => {
        try {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== "granted") {
                Alert.alert("Permission Denied", "Sorry, we need camera permissions to make this work!");
                return;
            }
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
            });
            if (!result.canceled) {
                setProfilePhoto(result.assets[0].uri);

                const tokenString = await AsyncStorage.getItem("user_id");
                if (!tokenString) {
                    Alert.alert("Error", "User ID not found.");
                    return;
                }

                const formData = new FormData();
                formData.append("user_id", tokenString);
                formData.append("user_image", profilePhoto);

                fetch(`http://192.168.1.116/webdev/reactecom/backend/api/profileImage`, {
                    method: "POST",
                    headers: {
                        'Authorization': `Bearer ablionnUeoexWIYx50-nRu?/hxopruPXxSd?q-uSItrgZp63NGDMws!ieJ=65J=6JM7i8hNoZXxVWD0NYaR/7eyWJQgDneFxBexdLFeq3DaXGc3uO7-UzxwqsH3yT3/NQ?h3O4UDT0DWc/wVGpCBLDjaxAeT4naMhnEL7D!QNcciRrcA0elZZaKZfaVc8wola4lRMfBdAQyWxVUusPLxW0uSpUarPN45H3lvp/5/Ih414YsIl9tL2/-wZoh6ZVubYovYY612Bh4e4utQMbWv3Ba1f?0JEpQXuDMdltMcD377O2Tp5NEY5YySrfmR01ondjmSw9Df?/!yHOX1PDTnZnL52V-isk60h!jybpW1EOPaJi2aAs=EO4-SSShBSwnYsLAi-8=/13z=G=l-a-GY/j24ndM6Zm0Pc=8oYWXNJlGf8Wcjmxnb?JELKbzdizvim7C-5c3MssI!MblU3?==v2Ies2bEEaeuQxmO8EAU3BQvWp!v-qQmMrXDNCfXAVq3HxVewC-wFgyEanXOhMkuprJCYVh!FwkueXd??4q3-Rlkn-JFmGehA9AVv3hZUE5DoeUEy-spSfhv?!=NCu1ldzUYKn1yvEHz3MUAsUgDilv1V?pcu7Fr=vAHQONRGAEtAapNjUSvb/n6unA-zY9IzrwMz0BtWzlat9YhSv0vge67WCzbKheoaKAECq84qmvl4aysUN2XcpbbDpOlCdrWNfl-/qBc-Iadzk1LSpPZ=L5Kk4niYV8EkhfJYNPEp91f8HhwTeRo-SHM0prvykwXLXaRKA5nN1RpAJR?I1ATgYERLQXTzbmqF/5GR/gYrfJO9Yx3VSPtj3fha/Lp6RcXd5qsG=P6nYwfTr7RYM3o/kuYHjN15dm0u!q0TVu0!vhX6AQb69toXv?mkSpy=bJEst4ilkG/MOPcvmj0sGl0enMX1gAl=F4BqOC9PmsOmO=h36=zGA?Yf8Q!Tw5wTWHbBLVac9wv5184n3t5m/ybgbGTsEexAm-wHL/nn!k8N-29HQbi02AXBWuHJ8A=?9JOtL9ItL?-vFJij2yhlOhqRa7O6URQvm3P9=LswJx6v8U5W-sB3VGRfX=cl-ZessygDnhzbtVFDP1T-BRw3y8HUReM!4tm1NM=vryf8gnSljTLB48Qd9zOuS!NhesM/tc2HF6MC4x!NCkoaAMDRqcqnDEmG6WyImV3xL!x2PvYQRb58Q?d6B8GqXjb1v=Skm!U7fDnu3UkVr/VyrbAltr--gI3n=TKgzD33Ra5yAPl0dn63UWFLL5!hQSPrt8oH2F?TIeM8qOobEzok28xeCZiI6g3BdVCVXB-!=4rm12tFKgPRM9aoG4tZtYLsoR5?XoClqUh4gRbfIh?Ogzv=QWmMl1re0/ZVOSAp/bnCnb8e!EtkBqKgo8/6zU?!lRafmPyCPP?VUOmIJgsrKxTpPqRiuu1d6W6!-a0SY-iZ6RmNiVhMmC9Cs0B7PsF/Ba4jMcnhBvLmmno1k7En2/D/4KOmSJG97oe2pf9/hokfjfpjpbUghU9zckFJmHFpLTfBGfMzVS3o?1fZcHzYfqEPTgpKhIQxR5!vw74yK8X?ftpAVjK0M8B9Sb0fxk4IYunY0fuBikuPOIbISmsXx5hYHLZGqf2=njAF=D?SMcjBo69444u9uMDfKOX77zj4waq2psteP9q9t1z8-UMS8M62knqzj4n8Lt1XpTmJiQukiAUNyfDxsbnj6Akax5Hf4RIznWul6AGb9v4!Hvq=x2-I1S5ipYM1eVfYCJV0mG5Aj2Q47ao2Mq93xqjvqCqo!fmmAT?jrzmSi6qA?sy2voWkanV5Z3dvE5no!d4V9JZ2qMjTw3A=poG/O/Lo//O2WrgquxNSQRiVAr7Az5VW5oQshtFor4NYN8mR/pV9kBnyPnYaMvPaoD5SLLd!bbLMznHQtC3Tln25JM/Dt9vKm7b7V=rvt7!OK=F=v/W/SgF4u1Kw9WJjb2yCPkfk-9cWblbwh-WBXx39SOy3nugv5qbx=KpjKK3LeaxTjcixtJjaXlQUS0N`, // your token
                    },
                    body: formData,
                })
                .then((response) => response.json())
                .then((data) => {
                    if (data.error === 0) {
                        Alert.alert("Success", "Image uploaded successfully.");
                    } else {
                        Alert.alert("Error", "Failed to upload image.");
                    }
                })
                .catch((error) => {
                    console.error("Upload Error:", error);
                    Alert.alert("Error", "Something went wrong during the upload.");
                });
                
            }
        } catch (error) {
            console.error("Error:", error);
            Alert.alert("Error", "Something went wrong!");
        }       
    };

    const [normalHeader, setNormalHeader] = useState(true);
    const [successAlert, setSuccessAlert] = useState(false);

    const editProfile = async ()=> {
        const tokenString = await AsyncStorage.getItem("user_id");
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('username', userName);
        formData.append('phone', phone);
        formData.append('id', tokenString);
  
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ablionnUeoexWIYx50-nRu?/hxopruPXxSd?q-uSItrgZp63NGDMws!ieJ=65J=6JM7i8hNoZXxVWD0NYaR/7eyWJQgDneFxBexdLFeq3DaXGc3uO7-UzxwqsH3yT3/NQ?h3O4UDT0DWc/wVGpCBLDjaxAeT4naMhnEL7D!QNcciRrcA0elZZaKZfaVc8wola4lRMfBdAQyWxVUusPLxW0uSpUarPN45H3lvp/5/Ih414YsIl9tL2/-wZoh6ZVubYovYY612Bh4e4utQMbWv3Ba1f?0JEpQXuDMdltMcD377O2Tp5NEY5YySrfmR01ondjmSw9Df?/!yHOX1PDTnZnL52V-isk60h!jybpW1EOPaJi2aAs=EO4-SSShBSwnYsLAi-8=/13z=G=l-a-GY/j24ndM6Zm0Pc=8oYWXNJlGf8Wcjmxnb?JELKbzdizvim7C-5c3MssI!MblU3?==v2Ies2bEEaeuQxmO8EAU3BQvWp!v-qQmMrXDNCfXAVq3HxVewC-wFgyEanXOhMkuprJCYVh!FwkueXd??4q3-Rlkn-JFmGehA9AVv3hZUE5DoeUEy-spSfhv?!=NCu1ldzUYKn1yvEHz3MUAsUgDilv1V?pcu7Fr=vAHQONRGAEtAapNjUSvb/n6unA-zY9IzrwMz0BtWzlat9YhSv0vge67WCzbKheoaKAECq84qmvl4aysUN2XcpbbDpOlCdrWNfl-/qBc-Iadzk1LSpPZ=L5Kk4niYV8EkhfJYNPEp91f8HhwTeRo-SHM0prvykwXLXaRKA5nN1RpAJR?I1ATgYERLQXTzbmqF/5GR/gYrfJO9Yx3VSPtj3fha/Lp6RcXd5qsG=P6nYwfTr7RYM3o/kuYHjN15dm0u!q0TVu0!vhX6AQb69toXv?mkSpy=bJEst4ilkG/MOPcvmj0sGl0enMX1gAl=F4BqOC9PmsOmO=h36=zGA?Yf8Q!Tw5wTWHbBLVac9wv5184n3t5m/ybgbGTsEexAm-wHL/nn!k8N-29HQbi02AXBWuHJ8A=?9JOtL9ItL?-vFJij2yhlOhqRa7O6URQvm3P9=LswJx6v8U5W-sB3VGRfX=cl-ZessygDnhzbtVFDP1T-BRw3y8HUReM!4tm1NM=vryf8gnSljTLB48Qd9zOuS!NhesM/tc2HF6MC4x!NCkoaAMDRqcqnDEmG6WyImV3xL!x2PvYQRb58Q?d6B8GqXjb1v=Skm!U7fDnu3UkVr/VyrbAltr--gI3n=TKgzD33Ra5yAPl0dn63UWFLL5!hQSPrt8oH2F?TIeM8qOobEzok28xeCZiI6g3BdVCVXB-!=4rm12tFKgPRM9aoG4tZtYLsoR5?XoClqUh4gRbfIh?Ogzv=QWmMl1re0/ZVOSAp/bnCnb8e!EtkBqKgo8/6zU?!lRafmPyCPP?VUOmIJgsrKxTpPqRiuu1d6W6!-a0SY-iZ6RmNiVhMmC9Cs0B7PsF/Ba4jMcnhBvLmmno1k7En2/D/4KOmSJG97oe2pf9/hokfjfpjpbUghU9zckFJmHFpLTfBGfMzVS3o?1fZcHzYfqEPTgpKhIQxR5!vw74yK8X?ftpAVjK0M8B9Sb0fxk4IYunY0fuBikuPOIbISmsXx5hYHLZGqf2=njAF=D?SMcjBo69444u9uMDfKOX77zj4waq2psteP9q9t1z8-UMS8M62knqzj4n8Lt1XpTmJiQukiAUNyfDxsbnj6Akax5Hf4RIznWul6AGb9v4!Hvq=x2-I1S5ipYM1eVfYCJV0mG5Aj2Q47ao2Mq93xqjvqCqo!fmmAT?jrzmSi6qA?sy2voWkanV5Z3dvE5no!d4V9JZ2qMjTw3A=poG/O/Lo//O2WrgquxNSQRiVAr7Az5VW5oQshtFor4NYN8mR/pV9kBnyPnYaMvPaoD5SLLd!bbLMznHQtC3Tln25JM/Dt9vKm7b7V=rvt7!OK=F=v/W/SgF4u1Kw9WJjb2yCPkfk-9cWblbwh-WBXx39SOy3nugv5qbx=KpjKK3LeaxTjcixtJjaXlQUS0N`, // your token
            },
            body: formData
        };
        fetch(`http://192.168.1.116/webdev/reactecom/backend/api/editProfile`, requestOptions)
        .then((response) => response.json())
        .then(function(data){ 
            if(data.error === 0){
                edited();
                setSuccessAlert(true);
                setNormalHeader(false);
                setTimeout(() => {
                    setSuccessAlert(false);
                    setNormalHeader(true);
                }, 2000);
            }
        })  
    }

   

    return (
        <View style={styles.profileWrap}>
            <View style={styles.headerWrap}>
                <Pressable onPress={handelGoBack}>
                    <Ionicons name="arrow-back" size={22} color="#333" />
                </Pressable>
                {
                    normalHeader ? <Text style={{ fontSize: 19, fontWeight: "400" }}>Edit Profile</Text> : null
                }
                {
                    successAlert ? <Text style={{ fontSize: 19, fontWeight: "400", color: '#008640' }}>Successfully Updated</Text> : null
                }
                <Ionicons name="ellipsis-vertical-sharp" size={22} color="#000" />
            </View>
            {profileDetails ? (
                <View style={styles.ppWrap}>
                    <View style={styles.pictureWrap}>
                        {profilePhoto && (
                            <Image
                                source={{ uri: profilePhoto || "demo" }}
                                style={{ width: 150, height: 150, borderRadius: 75 }}
                            />
                        )}
                        <Pressable onPress={takePhoto} style={styles.editPic}>
                            <Ionicons name="camera" size={20} color="#fff" />
                        </Pressable>
                    </View>
                    <View style={styles.smallPdetails}>
                        <Text style={styles.pdetailsName}>{name}</Text>
                        <View style={styles.mainForm}>
                            <TextInput keyboardType="default" placeholder="User Name" value={name || ''} onChangeText={setName} style={styles.inpBox} />
                            <TextInput keyboardType="number-pad" placeholder="Phone" value={phone || ''} onChangeText={setPhone} style={styles.inpBox} />
                            <TextInput keyboardType="default" placeholder="Email" value={email || ''} onChangeText={setEmail} style={styles.inpBox} />
                            <Pressable style={styles.submitBttn} onPress={editProfile}>
                                <Text style={styles.submitBttnText}>Edit Profile</Text>
                            </Pressable>
                        </View>                        
                    </View>
                </View>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    profileWrap: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 17,
        marginTop: 45,
        float: 'left'
    },
    ppWrap: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 45,
    },
    pictureWrap: {
        width: 150,
        height: 150,
        backgroundColor: "#f7f7f7",
        borderRadius: 75,
        position: "relative",
    },
    editPic: {
        position: "absolute",
        bottom: 7,
        right: 10,
        backgroundColor: "#7ede9c",
        width: 35,
        height: 35,
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    smallPdetails: {
        marginTop: 20,
        alignItems: "center",
    },
    pdetailsName: {
        fontSize: 18,
        fontWeight: "500",
    },
    mainForm: {
        width: 260,
        marginTop: 30,

    },
    inpBox: {
        width: "100%",
        height: 60,
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 5,
    },
    submitBttn: {
        width: '100%',
        textAlign: 'center',
        paddingVertical: 20,
        backgroundColor: '#EABE30',
        borderRadius: 50,
        marginTop: 30,
    },
    submitBttnText: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500',
    },
});
