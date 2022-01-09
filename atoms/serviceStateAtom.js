import { atom } from "recoil";

export const serviceState = atom({
  key: "serviceState", // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});
