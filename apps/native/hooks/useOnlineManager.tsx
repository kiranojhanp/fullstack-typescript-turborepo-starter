import React from "react";
import { Platform } from "react-native";

import NetInfo from "@react-native-community/netinfo";
import { onlineManager } from "@tanstack/react-query";

export default function useOnlineManager() {
  React.useEffect(() => {
    // React Query already supports on reconnect auto refetch in web browser
    if (Platform.OS !== "web") {
      return NetInfo.addEventListener(() => {
        onlineManager.setEventListener((setOnline) => {
          return NetInfo.addEventListener((state) => {
            setOnline(!!state.isConnected);
          });
        });
      });
    }
  }, []);
}
