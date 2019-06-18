import AsyncStorage from "@react-native-community/async-storage";

export const storeData = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (e) {
    // saving error
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};
