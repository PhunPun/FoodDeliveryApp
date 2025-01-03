import { StyleSheet } from "react-native"
export const colors ={
    button: '#ff8c52',
    grey1: '#43484d',
    grey2: '#5e6977',
    grey3: '#86939e',
    grey4: '#bdc6cf',
    grey5: '#e1e8ee',
    cardComment: '#86939e',
    cardbackground: 'white',
    statusBar: '#ff8c52',
    headerText: 'white',
    primary: '#ff8c52'
}
export const fonts ={
    fontSizes: {
        s1: 30,
        s2: 28,
        s3: 26,
        s4: 24,
        s5: 22,
        s6: 20,
        s7: 18,
        s8: 16,
    },
    fontWeights: {
        w1: 400,
        w2: 500,
        w3: 600,
        w4: 700,
        w5: 800,
        w6: 900,
        w7: 'bold',
    }
}

export const parameters ={
    headerHeight: 40,
    buttonStyle: {
        backgroundColor: colors.button,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderwidth: 1,
        borderColor: colors.button,
        height: 50,
        paddingHorizontal: 20,
        width: '100%',
    },
    buttonTitleStyle: {
        color: 'white',
        fontsize: fonts.fontSizes.s6,
        fontweight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3,
    },
    
}

export const titles={
    color:colors.primary, 
    fontSize :20,
    fontWeight:"bold"
}