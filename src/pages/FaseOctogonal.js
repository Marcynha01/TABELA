import React, { useState } from "react"
import { View, Text, TextInput, Image } from "react-native"
import styles from "../styles/faseoctagonal"
import timeAzul from "../assets/timeAzul.png"
import timeVermelho from "../assets/timeVermelho.png"
import flecha from "../assets/flecha.png"
import aguiaSports from "../assets/aguiaSports.png"
import ok from "../assets/ok.png"
import lotusGaming from "../assets/lotusGaming.png"

const FaseOctoganal = (props) => {
    console.log(props.title);
    const title = props.title !== undefined ? props.title : "FaseOctoganal"

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View>
                    <Image style={[styles.flecha]} source={flecha}></Image>
                </View>
                <View>
                    <Text style={styles.title}>Fase Octogonal - Quarta Edição</Text>
                </View>
            </View>

            {/* divisao 1*/}
            <View style={styles.lugar}>
                <View style={styles.div1}>
                    <Text style={styles.lugarTexto}>1º</Text>
                </View>
                <View style={styles.div2}>
                    <Image style={[styles.timeVermelho]} source={aguiaSports}></Image>
                </View>
                <View style={styles.div3}>
                    <View>
                        <Text style={styles.textoGrandeMeio}>Aguiar e-sports Elite</Text>
                    </View>
                    <View>
                        <Text style={styles.textoMeio}>#GOAG</Text>
                    </View>
                </View>
                <View style={styles.div4}>
                    <Text style={styles.textoFinal}>1/1</Text>
                </View>
            </View>

            
            {/* divisao 3 */}
            <View style={styles.lugar}>
                <View style={styles.div1}> 
                    <Text style={styles.lugarTexto}>3º</Text>
                </View>
                <View style={styles.div2}>
                    <Image style={[styles.timeVermelho]} source={ok}></Image>
                </View>
                <View style={styles.div3}>
                    <View>
                        <Text style={styles.textoGrandeMeio}>ORANGE KINGDOM OWARI</Text>
                    </View>
                    <View>
                        <Text style={styles.textoMeio}>#GOOKO</Text>
                    </View>
                </View>
                <View style={styles.div4}>
                    <Text style={styles.textoFinal}>1/1</Text>
                </View>
            </View>

            {/* divisao 4 */}
            <View style={styles.lugar}>
                <View style={styles.div1}>
                    <Text style={styles.lugarTexto}>4º</Text>
                </View>
                <View style={styles.div2}>
                    <Image style={[styles.timeVermelho]} source={ok}></Image>
                </View>
                <View style={styles.div3}>
                    <View>
                        <Text style={styles.textoGrandeMeio}>ORANGE KINGDOM UMAYYAD</Text>
                    </View>
                    <View>
                        <Text style={styles.textoMeio}>#GOOKU</Text>
                    </View>
                </View>
                <View style={styles.div4}> 
                    <Text style={styles.textoFinal}>1/0</Text>
                </View>
            </View>

            {/* divisao 5 */}
            <View style={styles.lugar}>
                <View style={styles.div1}>
                    <Text style={styles.lugarTexto}>5º</Text>
                </View>
                <View style={styles.div2}>
                    <Image style={[styles.timeVermelho]} source={timeAzul}></Image>
                </View>
                <View style={styles.div3}>
                    <View>
                        <Text style={styles.textoGrandeMeio}>EIGHT DIVINE WAYS</Text>
                    </View>
                    <View>
                        <Text style={styles.textoMeio}>#GOEDW</Text>
                    </View>
                </View>
                <View style={styles.div4}>
                    <Text style={styles.textoFinal}>1/0</Text>
                </View>
            </View>

            {/* divisao 6 */}
            <View style={styles.lugar}>
                <View style={styles.div1}>
                    <Text style={styles.lugarTexto}>6º</Text>
                </View>
                <View style={styles.div2}>
                    <Image style={[styles.timeVermelho]} source={timeAzul}></Image>
                </View>
                <View style={styles.div3}>
                    <View>
                        <Text style={styles.textoGrandeMeio}>EIGHT DIVINE WAYS BLACK</Text>
                    </View>
                    <View>
                        <Text style={styles.textoMeio}>#GOEDWB</Text>
                    </View>
                </View>
                <View style={styles.div4}>
                    <Text style={styles.textoFinal}>1/0</Text>
                </View>
            </View>

            {/* divisao 7 */}
            <View style={styles.lugar}>
                <View style={styles.div1}>
                    <Text style={styles.lugarTexto}>7º</Text>
                </View>
                <View style={styles.div2}>
                    <Image style={[styles.timeVermelho]} source={timeVermelho}></Image>
                </View>
                <View style={styles.div3}>
                    <View>
                        <Text style={styles.textoGrandeMeio}>NEO AKIHABARA</Text>
                    </View>
                    <View>
                        <Text style={styles.textoMeio}>#GOAKH</Text>
                    </View>
                </View>
                <View style={styles.div4}>
                    <Text style={styles.textoFinal}>0/1</Text>
                </View>
            </View>

            {/* divisao 8 */}
            <View style={styles.lugar}>
                <View style={styles.div1}>
                    <Text style={styles.lugarTexto}>8º</Text>
                </View>
                <View style={styles.div2}>
                    <Image style={[styles.timeVermelho]} source={lotusGaming}></Image>
                </View>
                <View style={styles.div3}>
                    <View>
                        <Text style={styles.textoGrandeMeio}>LOTUS GALAXY</Text>
                    </View>
                    <View>
                        <Text style={styles.textoMeio}>#GOLG</Text>
                    </View>
                </View>
                <View style={styles.div4}>
                    <Text style={styles.textoFinal}>0/2</Text>
                </View>
            </View>
        </View>


    )



}
export default FaseOctoganal
