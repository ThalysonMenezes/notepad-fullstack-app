import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiFormLabel-root': {
      color: '#ffffff',
      fontWeight: 300,
    },
    '& .MuiInputBase-input': {
      color: '#ffffff',
    },
  },

  paper: {
    // Esses dois atributos abaixo deixam o form preso (precisa dos dois para não ter alteração)
    width: 309,
    position: 'fixed',

    fontWeight: 420,
    backgroundColor: '#262424',
    padding: theme.spacing(2),
  },

  form: {
    color: '#ffffff',
    borderColor: '#262424',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  buttonSubmit: {
    marginBottom: 10,
  },

  buttonDeleteAll: {
    marginTop: 10,
  }
}));