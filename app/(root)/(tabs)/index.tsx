import { Text, View } from "react-native";
import { Link } from "expo-router";
// import "../../globals.css"
// import "../../../app/globals.css"
// import "./global.css"


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-Bold text-2xl my-10 ">Welcome to Re-State</Text>
      <Link href ="/SignIn"> Sign in </Link>
      <Link href ="/Explore">Explore </Link>
      <Link href ="/Profile">Profile </Link>
      <Link href ="/Properties/1">Property 1 </Link>
    </View>
  );
}
