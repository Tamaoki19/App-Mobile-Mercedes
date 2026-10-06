import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,

    elevation: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },

  liveCard: {
    borderWidth: 1.5,
    borderColor: "#00A19C",
  },

  upcomingCard: {
    borderLeftWidth: 3,
    borderLeftColor: "#00A19C",
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  round: {
    color: "#00A19C",
    fontSize: 8,
    fontWeight: "900",
  },

  date: {
    color: "#999999",
    fontSize: 7,
    marginTop: 2,
  },

  status: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 8,
    backgroundColor: "#EEEEEE",
  },

  statusLive: {
    backgroundColor: "#E9F9F7",
  },

  statusUpcoming: {
    backgroundColor: "#E9F9F7",
  },

  statusText: {
    color: "#777777",
    fontSize: 6,
    fontWeight: "800",
  },

  statusTextLive: {
    color: "#00A19C",
  },

  statusTextUpcoming: {
    color: "#00A19C",
  },

  raceInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  flagContainer: {
    width: 40,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 6,
  },

  flag: {
    fontSize: 22,
  },

  nameContainer: {
    flex: 1,
    marginLeft: 10,
  },

  raceName: {
    color: "#222222",
    fontSize: 12,
    fontWeight: "900",
  },

  circuit: {
    color: "#888888",
    fontSize: 7,
    marginTop: 3,
  },

  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 9,
  },

  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  winnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  winnerLabel: {
    color: "#999999",
    fontSize: 7,
    marginRight: 4,
  },

  winner: {
    color: "#333333",
    fontSize: 8,
    fontWeight: "800",
  },

  arrow: {
    color: "#999999",
    fontSize: 20,
    fontWeight: "300",
  },

  liveContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#00A19C",
    marginRight: 5,
  },

  liveText: {
    color: "#00A19C",
    fontSize: 7,
    fontWeight: "900",
  },

  scheduledContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  clock: {
    color: "#999999",
    fontSize: 11,
    marginRight: 4,
  },

  scheduled: {
    color: "#999999",
    fontSize: 7,
    fontWeight: "700",
  },

});

export default styles;