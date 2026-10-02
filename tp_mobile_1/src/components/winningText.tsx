import { Text, View } from "react-native";

export default function WinningText({
  team,
  diff,
}: {
  team: string;
  diff: number;
}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {diff === 0 ? "Empate" : `Gana ${team} por ${diff} puntos`}
      </Text>
    </View>
  );
}
