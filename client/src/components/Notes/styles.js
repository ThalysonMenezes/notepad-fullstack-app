import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiCircularProgress-circle': {
     stroke: 'white',
    },
  },

  centralized: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
  },

  smMargin: {
    margin: theme.spacing(1),
  },

  actionDiv: {
    textAlign: 'center',
  },
}));