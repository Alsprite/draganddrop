import React, { useRef } from 'react';
import { Typography, Box, Button } from '@material-ui/core/';
import { makeStyles, styled } from '@mui/styles';

export interface dragDropText {
  text?: 'DRAG-DROP HERE'
}

export interface orText {
  text?: 'OR'
}

export interface selectFileButtonLabel {
  text?: 'SELECT FILE'
}

const useStyles = makeStyles({
  box: {
    display: 'flex',
    maxWidth: "20%",
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
});

const FilesDropZone = () => {
  const classes = useStyles();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Box className={classes.box}>
      <Typography className={classes.text}>DRAG-DROP HERE</Typography>
      <Typography className={classes.text}>OR</Typography>
      <form>
        <Button
          variant="contained"
          className={classes.text}
          onClick={handleButtonClick}
        >
          SELECT FILE
          <input hidden type="file" ref={fileInputRef} />
        </Button>
      </form>
    </Box>
  );
};

export default FilesDropZone;