import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{color: 'black', textAlign: 'center', paddingTop: 40}}>Componente</Text>
      <Button title="Botão" onPress={() => console.log('Pressione o botão')} />
      <View style={{ height: 50, width: 50, backgroundColor: 'blue' }} />
      <Image source={{ uri: 'https://cdn.dribbble.com/users/3794380/screenshots/6734244/will_smith_db_4x.png?compress=1&resize=400x300&vertical=top' }} style={{ width: 150, height: 150 }}/>
    </View>
  );
};

export default App;