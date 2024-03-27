import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalStyles, colors } from "../../config/theme/AppTheme";
import { Title } from "../atoms/Title";
import { CustomIcon } from '../molecules/CustomIcon';
import { useNavigation } from "@react-navigation/native";

interface Props {
  title?: string
  icon?: boolean


}
export const CustomHeader = ({title='CinemaApp - Niu',icon=false, }:Props) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()
    const platform = Platform.OS;
    const height = platform === 'ios' ? insets.top + 40 : insets.top + 50
    const paddingTop = platform === 'ios' ? 0 : 10
  
    
    return (
      <View style={[globalStyles.customHeader, {height: height}]}>
        <View style={{marginTop: insets.top, flexDirection: 'row', justifyContent: 'flex-start', paddingTop: paddingTop}}>
        {icon && <CustomIcon name={'chevron-back-outline'} size={30} color={'white'} isPressable={true} onpress={() => navigation.goBack()}/> }

          <Title title={title} size={20} marginLeft={20} />
    
        </View>
      </View>
    )
  }