import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(255, 0, 0, 1)',
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: "column-reverse"
      }},


}));
//[theme.breakpoints.down('sm')]:{small device code} used to say the line after runs for devices only that are small
//also needs to send theme in parameter for makeStyles; i.e. export default makeStyles((theme) => ({