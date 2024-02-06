/* eslint-disable */
import React from 'react';
import { Typography, Box, Button } from '@material-ui/core/'
import { makeStyles } from '@mui/styles'

export interface dragDropText {
  text?: string;
}

export interface orText {
 text?: string;
}

export interface selectFileButtonLabel {
  text?: string;
}

const useStyles = makeStyles({
  box: {
    display: 'flex',
    maxWidth: "25%",
    minHeight: "15vh",
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid 3px',
    borderColor: 'black',
    whiteSpace: 'pre-wrap',
    flexDirection: 'column',
    padding: '10px',
    margin: '0 auto'
  },
  text: {
    display: 'inline'
  }
})

const FilesDropZone = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography className={classes.text}>DRAG-DROP HERE</Typography>
      <br />
      <Typography className={classes.text}>OR</Typography>
      <br />
      <Button variant="contained" className={classes.text}>SELECT FILE</Button>
    </Box>
  );
};

export default FilesDropZone;
