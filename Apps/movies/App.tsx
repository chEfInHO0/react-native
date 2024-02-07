import { useState } from "react";
import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import { styles } from "./components/style/styles";
import { MovieList } from "./components/movieList";

const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [send,setSend] = useState(false)
  const algo = async () => {
    if (title != "" && body != "") {
      const req = await fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 459,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await req.json();
      res
        ? alert(`Post criado com sucesso: ID ${res.id} | Titulo ${res.title}`)
        : alert("Algo deu errado");
    }else{
      alert("Preencha os dados")
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.safeArea}>
        {send ? <>
          <View>
            <Text style={styles.label}>Titulo</Text>
            <TextInput
              style={styles.input}
              placeholder="Titulo do Post"
              onChangeText={(t) => setTitle(t)}
            ></TextInput>
            <Text style={styles.label}>Corpo</Text>
            <TextInput
              style={styles.input}
              placeholder="Conteudo do Post"
              onChangeText={(t) => setBody(t)}
            ></TextInput>
            <Pressable style={styles.sendButton} onPress={() => algo()}>
              <Text style={styles.sendButtonText}>Enviar</Text>
            </Pressable>
          </View> 
          </>
          : false}
        <Text style={styles.movieTitle}> Lista de Filmes</Text>
        <MovieList />
      </View>
      <View>
        <Text style={styles.creator}>
            Luccas Elias
        </Text>
      </View>
    </View>
  );
};

export default App;
