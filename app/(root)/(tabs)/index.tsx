import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href ="/SignIn"> Sign in </Link>
      <Link href ="/Explore">Explore </Link>
      <Link href ="/Profile">Profile </Link>
      <Link href ="/Properties/1">Property 1 </Link>
    </View>
  );
}
