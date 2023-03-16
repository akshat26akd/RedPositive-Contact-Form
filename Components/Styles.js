import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  screen: {
    paddingTop: 100,
  },
  text: {
    fontSize: 46,
    fontWeight: "bold",
  },

  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: "#fff",
    borderColor: "rgba(255, 0, 0, 0.3)",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  inputBoxMessage: {
    width: 300,
    height: 100,
    backgroundColor: "#fff",
    borderColor: "rgba(255, 0, 0, 0.2)",
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },

  inputText: {
    fontSize: 20,
  },

  button: {
    width: 150,
    height: 50,
    backgroundColor: "rgba(255, 0, 0, 0.65)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    fontSize: 26,
    color: "#ffffff",
    fontWeight: "500",
  },
});

export default styles;
