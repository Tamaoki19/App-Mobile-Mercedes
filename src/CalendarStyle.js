import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },

  header: {
    height: 62,
    backgroundColor: "#FFFFFF",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 16,

    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },

  logo: {
    color: "#00A19C",
    fontSize: 15,
    fontWeight: "900",
  },

  logoWhite: {
    color: "#222222",
  },

  headerIcon: {
    color: "#222222",
    fontSize: 18,
  },

  content: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 90,
  },

  titleContainer: {
    marginBottom: 12,
  },

  title: {
    color: "#222222",
    fontSize: 20,
    fontWeight: "900",
  },

  subtitle: {
    color: "#888888",
    fontSize: 9,
    marginTop: 3,
  },

  filters: {
    flexDirection: "row",
    marginBottom: 12,
    gap: 5,
  },

  activeFilter: {
    backgroundColor: "#00A19C",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 12,
  },

  activeFilterText: {
    color: "#FFFFFF",
    fontSize: 7,
    fontWeight: "800",
  },

  filter: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  filterText: {
    color: "#777777",
    fontSize: 7,
    fontWeight: "700",
  },

});

export default styles;