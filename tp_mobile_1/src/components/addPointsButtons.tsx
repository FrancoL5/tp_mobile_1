import { Button, FlatList, StyleSheet, View } from "react-native";

const style = StyleSheet.create({
  button: {
    marginVertical: 4,
    padding: 10,
  },
});

export default function AddPointsPannel({
  addPoints,
  team,
}: {
  addPoints: (points: number) => void;
  team: string;
}) {
  const options = [1, 2, 3];

  function getButtonsPerPoints(points: number) {
    return (
      <View style={style.button}>
        <Button
          color={team === "local" ? "" : "orange"}
          title={`+${points.toString()}`}
          onPress={() => addPoints(points)}
        ></Button>
      </View>
    );
  }
  return (
    <FlatList
      data={options}
      scrollToOverflowEnabled
      renderItem={({ item }) => getButtonsPerPoints(item)}
      keyExtractor={(item) => item.toString()}
    ></FlatList>
  );
}
