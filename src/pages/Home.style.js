import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#151515",
  },

  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 40,
  },

  header: {
    height: 65,
    backgroundColor: "#111111",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#292929",
  },

  menu: {
    color: "#aaaaaa",
    fontSize: 22,
    marginRight: 15,
  },

  logo: {
    color: "#00A19C",
    fontSize: 18,
    fontWeight: "800",
    flex: 1,
  },

  logoWhite: {
    color: "#ffffff",
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#00A19C",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  search: {
    height: 38,
    backgroundColor: "#ffffff",
    borderRadius: 6,
    marginTop: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  searchIcon: {
    color: "#777777",
    fontSize: 18,
    marginRight: 6,
  },

  searchText: {
    color: "#999999",
    fontSize: 11,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 12,
    padding: 12,
    elevation: 3,
  },

  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  blueLine: {
    width: 3,
    height: 15,
    backgroundColor: "#00A19C",
    marginRight: 6,
    borderRadius: 2,
  },

  sectionTitle: {
    color: "#00A19C",
    fontSize: 9,
    fontWeight: "800",
  },

  raceTitle: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "900",
    color: "#161616",
    marginTop: 3,
  },

  raceInfo: {
    textAlign: "center",
    color: "#777777",
    fontSize: 9,
    marginTop: 5,
  },

  countdown: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },

  countNumber: {
    fontSize: 20,
    fontWeight: "800",
    color: "#222222",
    textAlign: "center",
  },

  countLabel: {
    fontSize: 7,
    color: "#999999",
    textAlign: "center",
    marginTop: 2,
  },

  colon: {
    fontSize: 18,
    color: "#999999",
    marginHorizontal: 7,
    marginBottom: 10,
  },

  green: {
    color: "#00A19C",
  },

  circuitContainer: {
    alignItems: "center",
    marginTop: 2,
  },

  circuit: {
    width: 95,
    height: 40,
    borderWidth: 2,
    borderColor: "#00A19C",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  circuitText: {
    color: "#00A19C",
    fontSize: 8,
    fontWeight: "800",
  },

  dateText: {
    textAlign: "center",
    color: "#999999",
    fontSize: 8,
    marginTop: 8,
  },

  raceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },

  smallText: {
    color: "#999999",
    fontSize: 7,
    marginBottom: 2,
  },

  boldText: {
    color: "#222222",
    fontSize: 10,
    fontWeight: "700",
  },

  driverCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    padding: 8,
    backgroundColor: "#f6f6f6",
    borderRadius: 6,
  },

  driverNumber: {
    width: 35,
    height: 35,
    borderWidth: 2,
    borderColor: "#00A19C",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  driverNumberText: {
    fontSize: 10,
    fontWeight: "900",
    color: "#222222",
  },

  driverInfo: {
    flex: 1,
    marginLeft: 9,
  },

  driverName: {
    fontSize: 11,
    fontWeight: "800",
    color: "#222222",
  },

  driverTeam: {
    fontSize: 7,
    color: "#999999",
    marginTop: 2,
  },

  driverPoints: {
    alignItems: "flex-end",
  },

  pointsNumber: {
    color: "#00A19C",
    fontSize: 13,
    fontWeight: "900",
  },

  pointsLabel: {
    color: "#999999",
    fontSize: 6,
  },

  resultBox: {
    marginTop: 10,
    backgroundColor: "#111111",
    borderRadius: 6,
    padding: 8,
  },

  resultTitle: {
    color: "#00A19C",
    fontSize: 7,
    fontWeight: "800",
    marginBottom: 6,
  },

  resultRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },

  resultPosition: {
    width: 28,
    color: "#ffffff",
    fontSize: 9,
    fontWeight: "800",
  },

  resultDriver: {
    flex: 1,
    color: "#eeeeee",
    fontSize: 9,
  },

  resultPoints: {
    color: "#00A19C",
    fontSize: 8,
    fontWeight: "800",
  },

  raceRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },

  racePosition: {
    width: 35,
  },

  positionText: {
    color: "#00A19C",
    fontSize: 11,
    fontWeight: "900",
  },

  raceDetails: {
    flex: 1,
  },

  raceName: {
    color: "#222222",
    fontSize: 10,
    fontWeight: "800",
  },

  circuitName: {
    color: "#999999",
    fontSize: 7,
    marginTop: 2,
  },

  driverRace: {
    color: "#555555",
    fontSize: 7,
    marginTop: 2,
  },

  racePoints: {
    alignItems: "flex-end",
  },

  racePointsNumber: {
    color: "#222222",
    fontSize: 8,
    fontWeight: "700",
  },

  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },

  tablePosition: {
    width: 25,
    color: "#999999",
    fontSize: 9,
    fontWeight: "700",
  },

  tableDriver: {
    flex: 1,
    color: "#222222",
    fontSize: 10,
    fontWeight: "700",
  },

  tablePoints: {
    color: "#00A19C",
    fontSize: 9,
    fontWeight: "800",
  },

  teamHighlight: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111111",
    padding: 10,
    borderRadius: 7,
  },

  teamLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#00A19C",
    alignItems: "center",
    justifyContent: "center",
  },

  star: {
    color: "#ffffff",
    fontSize: 18,
  },

  teamInfo: {
    flex: 1,
    marginLeft: 10,
  },

  teamName: {
    color: "#ffffff",
    fontSize: 9,
    fontWeight: "900",
  },

  teamDescription: {
    color: "#888888",
    fontSize: 7,
    marginTop: 3,
  },

  teamPoints: {
    alignItems: "flex-end",
  },

  bigPoints: {
    color: "#00A19C",
    fontSize: 17,
    fontWeight: "900",
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
  },

  stat: {
    alignItems: "center",
  },

  statNumber: {
    color: "#222222",
    fontSize: 16,
    fontWeight: "900",
  },

  statLabel: {
    color: "#999999",
    fontSize: 6,
    marginTop: 2,
  },

  footer: {
    alignItems: "center",
    paddingVertical: 20,
  },

  footerTitle: {
    color: "#00A19C",
    fontSize: 12,
    fontWeight: "900",
  },

  footerText: {
    color: "#666666",
    fontSize: 8,
    marginTop: 4,
  },

});

export default styles;