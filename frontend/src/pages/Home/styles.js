import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    height: '100%',
    textAlign: 'center',

    zIndex: 1,
  },
  gridContainer: {
    alignItems: 'center',
    color: '#fff',
  },
  logos: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',

    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      marginTop: 60,
    },

    '& img': {
      maxWidth: 200,
      margin: theme.spacing(2),

      [theme.breakpoints.down('lg')]: {
        maxWidth: 170,
      },
      [theme.breakpoints.down('md')]: {
        maxWidth: 130,
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: 100,
      },
    },
  },
  title: {
    fontSize: '5.44rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('lg')]: {
      fontSize: '4.5rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '3.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  subtitle: {
    fontFamily: 'Verdana, sans-serif',
    fontSize: '2.5rem',
    fontStyle: 'italic',

    [theme.breakpoints.down('lg')]: {
      fontSize: '1.75rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
    },
  },
  dates: {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    marginTop: 40,

    [theme.breakpoints.down('lg')]: {
      fontSize: '1.8rem',
      marginTop: 30,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6rem',
      marginTop: 20,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
      marginTop: 10,
    },
  },
}));

export default useStyles;
