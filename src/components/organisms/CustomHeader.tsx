import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalStyles, colors } from "../../config/theme/AppTheme";
import { Title } from "../atoms/Title";
import { CustomIcon } from '../molecules/CustomIcon';
import { useNavigation } from "@react-navigation/native";

interface Props {
  title?: string
  icon?: boolean

}
export const CustomHeader = ({title='CinemaApp - Niu',icon=false}:Props) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()
  
    
    return (
      <View style={[globalStyles.customHeader]}>
        <View style={{marginTop: insets.top, flexDirection: 'row', justifyContent: 'flex-start'}}>
        {icon && <CustomIcon name={'chevron-back-outline'} size={30} color={'white'} isPressable={true} onpress={() => navigation.goBack()}/> }

          <Title title={title} size={20} marginLeft={20} />
    
        </View>
      </View>
    )
  }