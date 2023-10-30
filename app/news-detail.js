import { Heading, Text, Center,Image,Divider } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";
// import { Image } from "expo-image";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Header title={"News"} withBack={true} />
          <Center flex={1} padding={"$4"}>      
            <Heading>News Detail</Heading>
            <Image
          width="$full"  height={150} marginTop={10} borderRadius="$none" 
            source={{
                uri: params.image,
              }}
          />
            <Text paddingRight={230} fontWeight="$bold" paddingVertical={20}>{params.date}</Text>
            <Text textAlign="justify" paddingRight={30} fontWeight="$extrabold" fontSize={23}>{params.title}</Text>
            <Divider marginVertical={10}/>
            <Text textAlign="justify">{params.content}</Text>
          </Center>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default NewsDetail;