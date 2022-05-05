import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    backgroundColor: '#262424',
    flexDirection: 'column',
    borderRadius: '4px',
    height: '100%',
  },

  root_paperHeader: {
    backgroundColor: '#1a1d1f',
    borderRadius: 2,
  },

  root_cardHeader: {
    padding: 8,
    '& .MuiAvatar-colorDefault': { // Avatar
      backgroundColor: '#df1007',
    },
    '& .MuiCardHeader-content': { // Título (nome do autor)
      color: '#f5eefa',
    }, 
    '& .MuiCardHeader-action': { // Ação (tempo decorrido)
      color: '#f5eefa',
      alignSelf: 'unset',
      marginTop: 'unset',
      marginRight: 'unset',
    },
  },

  grid: {
    display: 'flex',
  },

  content: {
    color: '#d5d5d5',
  },

  cardActions: {
    alignItems: 'center',
    //padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },

  options: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    justifyContent: 'space-between',
  },
});