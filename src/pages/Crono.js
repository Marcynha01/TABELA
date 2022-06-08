import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native"
import styles from "../styles/CronoStyles.js"
import hexagon from '../assets/images/hexagons.png'
import cadastroStyles from '../styles/cadastroStyles'
import timeAzul from "../assets/timeAzul.png"
import timeVermelho from "../assets/timeVermelho.png"
const Cronograma = (props) => {
    console.log(props.title);
    const title = props.title !== undefined ? props.title : "Cronograma"

    return (
        <View style={styles.container}>
           
                <Text style={styles.title}>Cronograma</Text> 
                <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonTwo]} source={hexagon} />
                <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonThree]} source={hexagon} />
                <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonOne]} source={hexagon} />
            
            <View style={styles.horario}>
            <View style={styles.insideHorario}> 
                <Text style={styles.whiteFont}>Aprox.  </Text>
                <Text style={[styles.whiteFont, ]}>19h </Text>
                </View>
                <View style={styles.insideHorario}>
                <Text style={styles.whiteFont}>20/05 </Text>
                <Text style={[styles.whiteFont, ]}>MDI</Text>
                </View>
                <Image style={[styles.timeAzul]} source={timeAzul}></Image>
                <Text style={[styles.whiteFont, styles.timeFonte]}> EDW </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> VS </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> OKO </Text>
                <Image style={[styles.timeVermelho]} source={timeVermelho}></Image>
            </View>


            <View style={styles.horario}>
               <View style={styles.insideHorario}> 
                <Text style={styles.whiteFont}>Aprox.  </Text>
                <Text style={[styles.whiteFont, ]}>19h </Text>
                </View>
                <View style={styles.insideHorario}>
                <Text style={styles.whiteFont}>20/05 </Text>
                <Text style={[styles.whiteFont, ]}>MDI</Text>
                </View>
            
                <Image style={[styles.timeAzul]} source={timeAzul}></Image>
                <Text style={[styles.whiteFont, styles.timeFonte]}> EDW </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> VS </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> OKO </Text>
                <Image style={[styles.timeVermelho]} source={timeVermelho}></Image>
            </View>

            <View style={styles.horario}>
            <View style={styles.insideHorario}> 
                <Text style={styles.whiteFont}>Aprox.  </Text>
                <Text style={[styles.whiteFont, ]}>19h </Text>
                </View>
                <View style={styles.insideHorario}>
                <Text style={styles.whiteFont}>20/05 </Text>
                <Text style={[styles.whiteFont, ]}>MDI</Text>
                </View>
                <Image style={[styles.timeAzul]} source={timeAzul}></Image>
                <Text style={[styles.whiteFont, styles.timeFonte]}> EDW </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> VS </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> OKO </Text>
                <Image style={[styles.timeVermelho]} source={timeVermelho}></Image>
            </View>

            <View style={styles.horario}>
            <View style={styles.insideHorario}> 
                <Text style={styles.whiteFont}>Aprox.  </Text>
                <Text style={[styles.whiteFont, ]}>19h </Text>
                </View>
                <View style={styles.insideHorario}>
                <Text style={styles.whiteFont}>20/05 </Text>
                <Text style={[styles.whiteFont, ]}>MDI</Text>
                </View>
                <Image style={[styles.timeAzul]} source={timeAzul}></Image>
                <Text style={[styles.whiteFont, styles.timeFonte]}> EDW </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> VS </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> OKO </Text>
                <Image style={[styles.timeVermelho]} source={timeVermelho}></Image>
            </View>











        </View>


    )
}


export default Cronograma
