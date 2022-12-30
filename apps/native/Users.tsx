import { StatusBar } from "expo-status-bar";
import { getUsers } from "queries";
import React from "react";
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "ui";

import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const { data, isLoading } = useQuery({ queryKey: ['users'], queryFn: getUsers });
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Users</Text>
      <Button
        onClick={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
        text="Boop"
      />
      {isLoading
        ? <ActivityIndicator size="large" />
        : (
          <ScrollView style={styles.scrollview}>
            {data?.map((datum, index) => {
              return (
                <View key={index}>
                  <Text style={styles.name}>{datum.firstName} {datum.lastName}</Text>
                  <Text style={styles.sex}>Sex: {datum.sex}</Text>
                </View>
              );
            })
            }
          </ScrollView>
        )}
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#fff",
    margin: 20
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 28,
  },
  scrollview: {
    marginTop: 20,
  },
  sex: {
    marginBottom: 20,
    fontSize: 16,
  },
});
