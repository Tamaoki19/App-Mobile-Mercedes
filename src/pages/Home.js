import React from "react";

import {
  View,
  Text,
  ScrollView,
  StatusBar,
} from "react-native";

import styles from "./HomeStyles";

function Header() {
  return (
    <View style={styles.header}>

      <Text style={styles.menu}>
        ☰
      </Text>

      <Text style={styles.logo}>
        Mercedes
        <Text style={styles.logoWhite}>
          Zone
        </Text>
      </Text>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          M
        </Text>
      </View>

    </View>
  );
}

function SearchBar() {
  return (
    <View style={styles.search}>

      <Text style={styles.searchIcon}>
        ⌕
      </Text>

      <Text style={styles.searchText}>
        Search drivers, teams, circuits...
      </Text>

    </View>
  );
}

function SectionTitle({ children }) {
  return (
    <View style={styles.sectionTitleContainer}>

      <View style={styles.blueLine} />

      <Text style={styles.sectionTitle}>
        {children}
      </Text>

    </View>
  );
}

function NextRace() {

  return (
    <View style={styles.card}>

      <SectionTitle>
        UPCOMING GRAND PRIX · F1
      </SectionTitle>

      <Text style={styles.raceTitle}>
        FORMULA 1 GRAND PRIX OF MONACO
      </Text>

      <Text style={styles.raceInfo}>
        Circuito de Monte Carlo · Monte-Carlo
      </Text>

      <View style={styles.countdown}>

        <View>
          <Text style={styles.countNumber}>
            02
          </Text>

          <Text style={styles.countLabel}>
            DAYS
          </Text>
        </View>

        <Text style={styles.colon}>
          :
        </Text>

        <View>
          <Text style={styles.countNumber}>
            14
          </Text>

          <Text style={styles.countLabel}>
            HRS
          </Text>
        </View>

        <Text style={styles.colon}>
          :
        </Text>

        <View>
          <Text style={styles.countNumber}>
            35
          </Text>

          <Text style={styles.countLabel}>
            MIN
          </Text>
        </View>

        <Text style={styles.colon}>
          :
        </Text>

        <View>
          <Text
            style={[
              styles.countNumber,
              styles.green,
            ]}
          >
            18
          </Text>

          <Text style={styles.countLabel}>
            SEC
          </Text>
        </View>

      </View>

      <View style={styles.circuitContainer}>

        <View style={styles.circuit}>

          <Text style={styles.circuitText}>
            MONACO
          </Text>

        </View>

      </View>

      <Text style={styles.dateText}>
        24 - 26 MAY 2026
      </Text>

    </View>
  );
}

function DriverCard({
  nome,
  numero,
  pontos,
}) {

  return (
    <View style={styles.driverCard}>

      <View style={styles.driverNumber}>

        <Text style={styles.driverNumberText}>
          {numero}
        </Text>

      </View>

      <View style={styles.driverInfo}>

        <Text style={styles.driverName}>
          {nome}
        </Text>

        <Text style={styles.driverTeam}>
          MERCEDES-AMG PETRONAS
        </Text>

      </View>

      <View style={styles.driverPoints}>

        <Text style={styles.pointsNumber}>
          {pontos}
        </Text>

        <Text style={styles.pointsLabel}>
          PTS
        </Text>

      </View>

    </View>
  );
}

function LastRace() {

  return (
    <View style={styles.card}>

      <SectionTitle>
        LAST RACE · MONACO GP
      </SectionTitle>

      <View style={styles.raceHeader}>

        <View>
          <Text style={styles.smallText}>
            CIRCUIT
          </Text>

          <Text style={styles.boldText}>
            Monte Carlo
          </Text>
        </View>

        <View>
          <Text style={styles.smallText}>
            TEAM
          </Text>

          <Text style={styles.boldText}>
            Mercedes
          </Text>
        </View>

      </View>

      <DriverCard
        nome="George Russell"
        numero="63"
        pontos="18"
      />

      <DriverCard
        nome="Kimi Antonelli"
        numero="12"
        pontos="10"
      />

      <View style={styles.resultBox}>

        <Text style={styles.resultTitle}>
          MERCEDES RESULT
        </Text>

        <View style={styles.resultRow}>

          <Text style={styles.resultPosition}>
            P2
          </Text>

          <Text style={styles.resultDriver}>
            George Russell
          </Text>

          <Text style={styles.resultPoints}>
            18 pts
          </Text>

        </View>

        <View style={styles.resultRow}>

          <Text style={styles.resultPosition}>
            P5
          </Text>

          <Text style={styles.resultDriver}>
            Kimi Antonelli
          </Text>

          <Text style={styles.resultPoints}>
            10 pts
          </Text>

        </View>

      </View>

    </View>
  );
}

const corridasMercedes = [
  {
    corrida: "GP da Austrália",
    circuito: "Albert Park",
    resultado: "P2",
    piloto: "George Russell",
    pontos: "18 pts",
  },
  {
    corrida: "GP do Japão",
    circuito: "Suzuka",
    resultado: "P3",
    piloto: "George Russell",
    pontos: "15 pts",
  },
  {
    corrida: "GP do Bahrein",
    circuito: "Sakhir",
    resultado: "P4",
    piloto: "George Russell",
    pontos: "12 pts",
  },
  {
    corrida: "GP da Arábia Saudita",
    circuito: "Jeddah",
    resultado: "P5",
    piloto: "George Russell",
    pontos: "10 pts",
  },
  {
    corrida: "GP de Miami",
    circuito: "Miami",
    resultado: "P3",
    piloto: "Kimi Antonelli",
    pontos: "15 pts",
  },
];

function MercedesRaces() {

  return (
    <View style={styles.card}>

      <SectionTitle>
        RECENT MERCEDES RACES
      </SectionTitle>

      {corridasMercedes.map(
        (corrida, index) => (

          <View
            style={styles.raceRow}
            key={index}
          >

            <View style={styles.racePosition}>

              <Text style={styles.positionText}>
                {corrida.resultado}
              </Text>

            </View>

            <View style={styles.raceDetails}>

              <Text style={styles.raceName}>
                {corrida.corrida}
              </Text>

              <Text style={styles.circuitName}>
                {corrida.circuito}
              </Text>

              <Text style={styles.driverRace}>
                {corrida.piloto}
              </Text>

            </View>

            <View style={styles.racePoints}>

              <Text style={styles.racePointsNumber}>
                {corrida.pontos}
              </Text>

            </View>

          </View>

        )
      )}

    </View>
  );
}

const pilotos = [
  {
    posicao: 1,
    nome: "George Russell",
    pontos: "245",
  },
  {
    posicao: 2,
    nome: "Kimi Antonelli",
    pontos: "198",
  },
];

function DriverChampionship() {

  return (
    <View style={styles.card}>

      <SectionTitle>
        MERCEDES DRIVERS CHAMPIONSHIP
      </SectionTitle>

      {pilotos.map(
        (piloto) => (

          <View
            style={styles.tableRow}
            key={piloto.posicao}
          >

            <Text style={styles.tablePosition}>
              {piloto.posicao}
            </Text>

            <Text style={styles.tableDriver}>
              {piloto.nome}
            </Text>

            <Text style={styles.tablePoints}>
              {piloto.pontos} pts
            </Text>

          </View>

        )
      )}

    </View>
  );
}

function TeamChampionship() {

  return (
    <View style={styles.card}>

      <SectionTitle>
        MERCEDES TEAM CHAMPIONSHIP
      </SectionTitle>

      <View style={styles.teamHighlight}>

        <View style={styles.teamLogo}>

          <Text style={styles.star}>
            ★
          </Text>

        </View>

        <View style={styles.teamInfo}>

          <Text style={styles.teamName}>
            MERCEDES-AMG PETRONAS
          </Text>

          <Text style={styles.teamDescription}>
            Formula 1 Team
          </Text>

        </View>

        <View style={styles.teamPoints}>

          <Text style={styles.bigPoints}>
            443
          </Text>

          <Text style={styles.pointsLabel}>
            PTS
          </Text>

        </View>

      </View>

      <View style={styles.statsContainer}>

        <View style={styles.stat}>
          <Text style={styles.statNumber}>
            2
          </Text>

          <Text style={styles.statLabel}>
            WINS
          </Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statNumber}>
            8
          </Text>

          <Text style={styles.statLabel}>
            PODIUMS
          </Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statNumber}>
            5
          </Text>

          <Text style={styles.statLabel}>
            POLES
          </Text>
        </View>

      </View>

    </View>
  );
}

export default function Home() {

  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#151515"
      />

      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          styles.scrollContent
        }
      >

        <SearchBar />

        <NextRace />

        <LastRace />

        <MercedesRaces />

        <DriverChampionship />

        <TeamChampionship />

        <View style={styles.footer}>

          <Text style={styles.footerTitle}>
            MERCEDESZONE
          </Text>

          <Text style={styles.footerText}>
            Informações da Mercedes-AMG Petronas
          </Text>

        </View>

      </ScrollView>

    </View>
  );
}