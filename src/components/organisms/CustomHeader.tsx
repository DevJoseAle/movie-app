import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalStyles, colors } from "../../config/theme/AppTheme";
import { Title } from "../atoms/Title";
import { CustomIcon } from "../molecules/CustomIcon";
import { useNavigation } from "@react-navigation/native";

export const CustomHeader = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()
  
    
    return (
      <View style={[globalStyles.customHeader]}>
        <View style={{marginTop: insets.top, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Title title="Cinema App - NiuFoods" size={20} />
          <CustomIcon 
          name='heart-outline' 
          size={30} 
          color={colors.text} 
          hasBadge 
          onpress={() => navigation.navigate('Favoritos' as never)}
          />
        </View>
      </View>
    )
  }