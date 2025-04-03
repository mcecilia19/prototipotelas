import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Input} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Login({navigation}){
  return (
  <View style={styles.loginContainer}>
  <Avatar
    size={64}
    rounded
    source={{ uri: "https://media.licdn.com/dms/image/v2/D4D03AQGi_zQ3KPZz3A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1670178002431?e=2147483647&v=beta&t=v2xh_fLiT68IyOO_TvM3IFtbErpporfiBO0GiR3ry1w" }}
  containerStyle={styles.avatar}
  />
  <Text>Email</Text>
  <Input placeholder='digite seu email' />
  <Text>Senha</Text>
  <Input placeholder='digite sua senha'/>
  <Button title="Entrar" buttonStyle={styles.button} />
  <Button title="Cadastrar"
  onPress={() => navigation.navigate('Cadastro')}
  buttonStyle={styles.button} />
  <Button title="Esqueci a senha"
  onPress={() => navigation.navigate('Esqueceusenha')}
  buttonStyle={styles.button} 
  />  
  </View>
)}

function Cadastro(){
  return (
  <View style={styles.loginContainer}>
  <Text>CADASTRO</Text>
  <Text>Nome</Text>
  <Input placeholder='digite seu nome' />
  <Text>Email</Text>
  <Input placeholder='digite seu email'/>
  <Text>Senha</Text>
  <Input placeholder='digite sua senha'/>
  <Button title="Cadastrar"
  onPress={() => navigation.navigate('Login')}
  buttonStyle={styles.button} />
  </View>
)}

function Esqueceusenha(){
  return (
  <View style={styles.loginContainer}>
  <Text>RECUPERAÇÃO DE SENHA</Text>
  <Text>Email</Text>
  <Input placeholder='digite seu email'/>
  <Button title="Enviar"
  onPress={() => navigation.navigate('Login')}
  buttonStyle={styles.button} />
  </View>
)}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
        <Stack.Screen name='Esqueceusenha' component={Esqueceusenha}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
});
