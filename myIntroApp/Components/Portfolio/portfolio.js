import PortfolioStyle from './portfilio_style';
import { View, Text, Image,SafeAreaView } from 'react-native';
import img from '../../assets/img.png'; 

export default function Portfolio() {
  return (
    <SafeAreaView style={PortfolioStyle.outer}>
      <Text style={PortfolioStyle.heading}>
        My Portfolio
      </Text>
     <View style={PortfolioStyle.container}>
        <Text style={PortfolioStyle.textContainer}>
        I am Muhammad Yahya, a final year student of BCS. I am pursuing it from National University. I have used component approach to make this react app , Firstly I made a component and then I made a external style sheet for it . in the end I imported style sheet in the component and component in the App.js .
      </Text>
      <Image source={img} style={PortfolioStyle.imgStyle}/>
     </View>
     <Text style={PortfolioStyle.heading}>
        Task Approach
      </Text>
     <View style={PortfolioStyle.container}>
        <Text style={PortfolioStyle.textContainer}>
        I have used component approach to make this react app , Firstly I made a component and then I made a external style sheet for it . in the end I imported style sheet in the component and component in the App.js .
      </Text>
     </View>
    </SafeAreaView>
  );
}
