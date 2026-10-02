import { StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
  teamTittle: { alignSelf: "center", fontSize: 20, fontWeight: "bold" },
  container: { alignItems: "center", justifyContent: "center" },
  points: { fontSize: 32, fontWeight: "bold" },
});

export default function PointsPannel({
  team,
  points,
}: {
  team: string;
  points: number;
}) {
  return (
    <View style={style.container}>
      <Text style={style.points}>{points}</Text>
      <Text style={style.teamTittle}>{team}</Text>;
    </View>
  );
}
