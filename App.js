import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Button } from 'react-native';

const users = [
    {
        username: 'huu',
        password: '123',
    },
    {
        username: 'nguyen',
        password: '123',
    },
];

export default function App() {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    function actionDangNhap() {
           const userAccount = users.find((user)=> user.username === userName && user.password === passWord);
           if(userAccount) {
            alert('Đăng nhập thành công');
           }
           else{
            alert('Đăng nhập thất bại');
           }
    }

    return (
        <SafeAreaView style={styles.content}>
            <View>
                <View style={styles.textWrapper}>
                    <Text style={[styles.hiText, { color: 'white' }]}>Xin chào!</Text>
                    <Text style={styles.userText}>Nguyễn Hoàn Hữu</Text>
                </View>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.inputPassword}
                    placeholder="Nhập họ & tên"
                    onChangeText={(value) => {
                        setUserName(value);
                    }}
                    value={userName}
                ></TextInput>
            </View>
            <View style={styles.form2}>
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputPassword}
                    placeholder="mật khẩu"
                    onChangeText={(value) => {
                        setPassWord(value);
                    }}
                    value={passWord}
                ></TextInput>
            </View>

            <TouchableOpacity style={styles.action} onPress={actionDangNhap}>
                <Text style={styles.btnDangNhap}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>

            <View style={styles.iteamBottom}>
                <TouchableOpacity>
                    <Text>QUÊN MẬT KHẨU</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>THOÁT TÀI KHOẢN</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#b0006d',
    },
    textWrapper: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'b0006d',
    },
    hiText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    userText: {
        marginTop: 20,
        fontSize: 18,
        color: 'white',
    },
    form: {
        marginTop: 100,
        justifyContent: 'center',
        AlignItems: 'center',
    },
    form2: {
        marginTop: 40,
        justifyContent: 'center',
        AlignItems: 'center',
    },
    inputPassword: {
        height: 60,
        backgroundColor: 'white',
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 30,
        textAlign: 'center',
    },
    action: {
        marginTop: 90,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#9C5C69',
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 30,
    },
    btnDangNhap: {
        color: '#fff',
    },
    iteamBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 60,
    },
});
