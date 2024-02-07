import { FlatList, Text, View, Image, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "../style/styles";

export const MovieList = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<any>([]);
  const loadMovies = async () => {
    const req = await fetch("https://api.b7web.com.br/cinema/");
    const res = await req.json();
    if (res) {
      setMovies(res);
      setLoading(false);
    }
  };
  useEffect(() => {
    loadMovies();
  }, []);
  return (
    <>
      {loading ? (
        <ActivityIndicator size={"large"} color={"#fff"} />
      ) : (
        <FlatList
          style={styles.spacer}
          data={movies}
          renderItem={({ item }) => (
            <View style={styles.moviePlacer}>
              <Image
                source={{ uri: item.avatar }}
                style={styles.movieBanner}
              ></Image>
              <Text style={styles.movieTitle}>{item.titulo}</Text>
            </View>
          )}
          keyExtractor={(item) => item.titulo}
        ></FlatList>
      )}
    </>
  );
};
