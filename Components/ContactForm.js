import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";

import styles from "./Styles";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (text) => setName(text);
  const handleMobileChange = (text) => setMobile(text);
  const handleEmailChange = (text) => setEmail(text);
  const handleMessageChange = (text) => setMessage(text);

  const handleSubmit = async () => {
    const SENDGRID_API_KEY =
      "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";
    const SENDGRID_URL = "https://api.sendgrid.com/v3/mail/send";

    const data = {
      personalizations: [
        {
          to: "akshat26042002@gmail.com",
        },
      ],
      from: {
        email: email,
      },
      subject: "Contact Form Submission",
      content: [
        {
          type: "text/plain",
          value: `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nMessage: ${message}`,
        },
      ],
    };
    const headers = {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
      origin: "*",
      "Access-Control-Allow-Origin": "*",
    };
    try {
      const response = await fetch(SENDGRID_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
      if (response.status === 202) {
        console.log(`Message sent successfully`);
        Alert.alert("Success", "Message sent successfully");
        setName("");
        setMobile("");
        setEmail("");
        setMessage("");
      } else {
        console.log(`Failed to send message`);
        Alert.alert("Error", "Failed to send message");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/ContacFormBG.png")}
    >
      <View style={styles.screen}>
        <Text style={styles.text}>Get In Touch!</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputText}
            keyboardType="default"
            placeholder="Name"
            onChangeText={handleNameChange}
            value={name}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputText}
            keyboardType="phone-pad"
            placeholder="Mobile Number"
            onChangeText={handleMobileChange}
            value={mobile}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputText}
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={handleEmailChange}
            value={email}
          />
        </View>
        <View style={styles.inputBoxMessage}>
          <TextInput
            style={styles.inputText}
            keyboardType="default"
            placeholder="Message"
            onChangeText={handleMessageChange}
            value={message}
            multiline={true}
          />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={handleSubmit}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ContactForm;
