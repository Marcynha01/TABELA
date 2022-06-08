import { NavigationContainer } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native"
import styles from "../styles/tabela1"
import FaseOctagonal from  "../pages/FaseOctogonal.js"
import FaseGrupo from "../pages/FaseGrupo.js"

export default function Tabela1({ navigation }){
    return (
        <View style={styles.container}>
        {/* <View styles={styles.header}>
        </View> */}

        <View styles={styles.mid}>

            <View style={styles.box}>
                <TouchableOpacity onPress={()=> NavigationContainer.navigate("FaseOctogonal.js")}>
                    <Text style={styles.titulo}>Fase Octogonal - Quarta Edição</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity onPress={()=> NavigationContainer.navigate("FaseGrupo.js")}>
                <Text style={styles.titulo}>Fase de Grupos - Quarta Edição</Text>
                </TouchableOpacity>
            </View>

        
        </View>


        {/* <View styles={styles.footer}>
        </View> */}




    </View>
    )
}