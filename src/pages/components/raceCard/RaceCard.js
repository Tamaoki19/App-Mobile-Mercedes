import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./RaceCard.style";

export default function RaceCard({ race, onPress }) {

  return (
    <TouchableOpacity
      style={[
        styles.card,
        race.status === "LIVE" && styles.liveCard,
        race.status === "UPCOMING" && styles.upcomingCard,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >

      {/* TOPO DO CARD */}

      <View style={styles.top}>

        <View>
          <Text style={styles.round}>
            ROUND {race.round}
          </Text>

          <Text style={styles.date}>
            {race.date}
          </Text>
        </View>

        <View
          style={[
            styles.status,
            race.status === "LIVE" && styles.statusLive,
            race.status === "UPCOMING" && styles.statusUpcoming,
          ]}
        >
          <Text
            style={[
              styles.statusText,
              race.status === "LIVE" && styles.statusTextLive,
              race.status === "UPCOMING" &&
                styles.statusTextUpcoming,
            ]}
          >
            {race.status}
          </Text>
        </View>

      </View>


      {/* CORRIDA */}

      <View style={styles.raceInfo}>

        <View style={styles.flagContainer}>
          <Text style={styles.flag}>
            {race.flag}
          </Text>
        </View>

        <View style={styles.nameContainer}>

          <Text style={styles.raceName}>
            {race.name}
          </Text>

          <Text style={styles.circuit}>
            {race.circuit}
          </Text>

        </View>

      </View>


      {/* DIVISÓRIA */}

      <View style={styles.divider} />


      {/* VENCEDOR */}

      {race.status === "FINISHED" && (
        <View style={styles.bottom}>

          <View style={styles.winnerContainer}>

            <Text style={styles.winnerLabel}>
              WINNER:
            </Text>

            <Text style={styles.winner}>
              {race.winner}
            </Text>

          </View>

          <Text style={styles.arrow}>
            ›
          </Text>

        </View>
      )}


      {/* LIVE */}

      {race.status === "LIVE" && (
        <View style={styles.bottom}>

          <View style={styles.liveContainer}>

            <View style={styles.liveDot} />

            <Text style={styles.liveText}>
              QUALIFYING LIVE
            </Text>

          </View>

          <Text style={styles.arrow}>
            ›
          </Text>

        </View>
      )}


      {/* PRÓXIMA */}

      {race.status === "UPCOMING" && (
        <View style={styles.bottom}>

          <View style={styles.scheduledContainer}>

            <Text style={styles.clock}>
              ◷
            </Text>

            <Text style={styles.scheduled}>
              SCHEDULED
            </Text>

          </View>

          <Text style={styles.arrow}>
            ›
          </Text>

        </View>
      )}

    </TouchableOpacity>
  );
}