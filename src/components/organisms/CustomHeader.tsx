import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalStyles, colors } from "../../config/theme/AppTheme";
import { Title } from "../atoms/Title";
import { CustomIcon } from "../molecules/CustomIcon";

export const CustomHeader = () => {
    const insets = useSafeAreaInsets();
  
  
    return (
      <View style={[globalStyles.customHeader,
      ]}>
        <View style={{marginTop: insets.top, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Title title="Cinema App" size={20} />
          <CustomIcon name='heart-outline' size={30} color={colors.text} hasBadge />
        </View>
      </View>
    )
  }