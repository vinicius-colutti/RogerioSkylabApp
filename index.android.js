import React from'react';
import {Text, View, Button, AppRegistry, TouchableOpacity, Image, Alert} from 'react-native';


const Styles = {
 
  imgLogo:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },

  botao:{
    backgroundColor: '#000000',
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    borderRadius:10,
    paddingVertical: 10,
    paddingHorizontal: 30
  },

  textoBotao:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25
  }

}

const gerarNovaFrase = () =>{
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  var frases = Array();
  frases[0] = "Dedo, língua, cu e boceta, Dedo, boceta, língua e cu. Dedo na língua, língua no dedo, Cu na boceta, boceta no cu.";
  frases[1] = "Você é feia, É feia pra caralho. É pobre, Mora na rua, É perigosa, É feia pra caralho.";
  frases[2] = 'Dedo no cu é o seu nome, mora no canavial, Gritaria é um assombro, tem a voz dos carnavais, Quando eles se encontram, fazem o povo suspirar, É uma dupla sertaneja, que acabou de chegar';
  frases[3] = 'Qual a diferença entre eu, Ana Maria Braga e Mario Covas?  É que o Mário Covas já morreu  Ana Maria Braga tá morrendo  e eu também um dia vou morrer De quê? CANCER NO CU';
  frases[4] = 'Eu durmo pouco pra ficar com sono E ver um mundo totalmente estranho Perto de mim a quase mil quilômetros  Eu durmo pouco pra ficar distante';
  var fraseEscolhida = frases[numeroAleatorio];
  Alert.alert(fraseEscolhida);


}

const App = ()=>{
  const {imgLogo, botao, textoBotao}= Styles;
  return (
      <Image style={imgLogo} source={require('./img/skylab.jpg')}>
      <TouchableOpacity
        onPress={gerarNovaFrase}
       style={botao}>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
      </Image>
  );
};

AppRegistry.registerComponent('frasesDoDia', ()=> App);