import { StyleSheet } from 'react-native';

const PortfolioStyle = StyleSheet.create({
    outer:{
        flex:1,
        alignItems: 'center',
        marginTop:70,
        
    },
    heading:{
        fontSize:20,
        fontWeight:'bold',
        
    },
    container : {
        flex:1,
        //justifyContent:'center',
        flexDirection: 'row',
      //  marginTop:10,     
        padding:10,  
    },
    textContainer: {
        flex: 1, // Takes 1 part of the available space
        paddingRight: 10, // Add some space between text and image
      },
      imgStyle: {
        width: 150, // Set the width you desire
        aspectRatio: 1.20, // Maintain the aspect ratio to keep it round
        borderRadius: 100, // Set borderRadius to half of the width to make it round
      },
});
export default PortfolioStyle;
