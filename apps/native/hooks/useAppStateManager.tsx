import { useEffect } from "react";
import { AppState, Platform } from "react-native";

import { focusManager } from "@tanstack/react-query";

import type { AppStateStatus } from "react-native";
function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

export default function useAppStateManager() {
  useEffect(() => {
    const subscription = AppState.addEventListener("change", onAppStateChange);
    return () => subscription.remove();
  }, []);
}
