import { atom } from "recoil";

export const navbarState = atom({
  key: "navbarState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
