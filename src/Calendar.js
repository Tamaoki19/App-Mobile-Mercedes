import React from "react";

import {
  View,
  Text,
  ScrollView,
} from "react-native";

import RaceCard from "../components/raceCard/RaceCard";

import mockRaces from "../data/mockRaces";

import styles from "./CalendarStyle";

export default function Calendar({ navigation }) {

  function abrirCorrida(race) {

    console.log(
      "Corrida selecionada:",
      race.name
    );

  }

  return (
    <View style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <View>

          <Text style={styles.logo}>
            Mercedes
            <Text style={styles.logoWhite}>
              Zone
            </Text>
          </Text>

        </View>

        <Text style={styles.headerIcon}>
          ◉
        </Text>

      </View>


      {/* CONTEÚDO */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          styles.content
        }
      >

        {/* TÍTULO */}

        <View style={styles.titleContainer}>

          <Text style={styles.title}>
            Race Calendar
          </Text>

          <Text style={styles.subtitle}>
            Formula 1 · 2026
          </Text>

        </View>


        {/* FILTROS */}

        <View style={styles.filters}>

          <View style={styles.activeFilter}>
            <Text style={styles.activeFilterText}>
              All Races
            </Text>
          </View>

          <View style={styles.filter}>
            <Text style={styles.filterText}>
              Upcoming
            </Text>
          </View>

          <View style={styles.filter}>
            <Text style={styles.filterText}>
              Completed
            </Text>
          </View>

          <View style={styles.filter}>
            <Text style={styles.filterText}>
              Live Track
            </Text>
          </View>

        </View>


        {/* LISTA */}

        {mockRaces.map((race) => (

          <RaceCard
            key={race.id}
            race={race}
            onPress={() => abrirCorrida(race)}
          />

        ))}

      </ScrollView>

    </View>
  );
}