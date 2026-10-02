import AddPointsPannel from "@/components/addPointsButtons";
import PointsPannel from "@/components/pointsPannel";
import WinningText from "@/components/winningText";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const teams = ["local", "visitante"];

const style = StyleSheet.create({
  buttonBox: {
    width: 100,
  },
  pannelContainer: { flex: 1, justifyContent: "space-around" },
  container: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginBottom: 40,
  },
});

const defaultValue = teams.reduce((acc, v) => ({ ...acc, [v]: 0 }), {});

export default function App() {
  const [points, setPoints] = useState<Record<string, number>>(defaultValue);

  const IsDefaultPoints = Object.values(points).filter((v) => v).length === 0;

  const addPoints = (team: string) => (points: number) =>
    setPoints((prev) => ({ ...prev, [team]: prev[team] + points }));

  const getWinningTeam = () => {
    //Ya se que podría haber usado dos useState pero no queria hardcodear local y visitante
    //Di un par de vueltas más por eso y tampoco hacía falta

    const teamOnePoints = points[teams[0]];
    const teamTwoPoints = points[teams[1]];
    return teamOnePoints > teamTwoPoints
      ? { diff: teamOnePoints - teamTwoPoints, team: teams[0] }
      : teamOnePoints === teamTwoPoints
        ? { diff: 0, team: "" }
        : { diff: teamTwoPoints - teamOnePoints, team: teams[1] };
  };
  const winningTeam = getWinningTeam();

  const reset = () => setPoints(defaultValue);

  function getPointsPannel(team: string) {
    return (
      <View style={style.pannelContainer}>
        <PointsPannel points={points[team]} team={team}></PointsPannel>
        <View style={style.buttonBox}>
          <AddPointsPannel
            team={team}
            addPoints={addPoints(team)}
          ></AddPointsPannel>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        {IsDefaultPoints || (
          <WinningText
            team={winningTeam.team}
            diff={winningTeam.diff}
          ></WinningText>
        )}
        <FlatList
          data={teams}
          horizontal={true}
          renderItem={({ item }) => getPointsPannel(item)}
        ></FlatList>
        <Button
          disabled={IsDefaultPoints}
          color="red"
          title="Reiniciar partido"
          onPress={reset}
        ></Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
