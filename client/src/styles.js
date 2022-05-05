import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    gridAppBar: {
      paddingLeft: 120,
      paddingRight: 120
    },

    gridForm: {
      paddingLeft: 0,
      paddingRight: 0
    },

    appBar: {
      borderRadius: 5,
      margin: '5px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      color: "#fff",
      backgroundColor: '#262424',
    },

    heading: {
      // Em RGB
      /*color: 'rgba(0,183,255, 1)',*/
      // Em HEX
      color: '#ffffff',
      fontWeight: 450,
    },

    [theme.breakpoints.down('sm')]:{
      mainContainer: {
        flexDirection: "column-reverse"
      }
    },
}));