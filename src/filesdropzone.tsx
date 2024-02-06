import React, { useRef, DragEvent, useState } from 'react';
import { Typography, Box, Button } from '@material-ui/core/';
import { makeStyles, styled } from '@mui/styles';

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
    maxWidth: "20%",
    minHeight: "15vh",
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid 3px',
    borderColor: 'black',
    whiteSpace: 'pre-wrap',
    flexDirection: 'column',
    padding: '10px',
    margin: '0 auto',
  },
  text: {
    display: 'inline'
  }
});

const FilesDropZone: React.FC<dragDropText & orText & selectFileButtonLabel> = ({
  text: dragDropText = 'DRAG-DROP HERE',
  text: orText = 'OR',
  text: selectFileText = 'SELECT FILE'
}) => {
  const classes = useStyles();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [dragIsOver, setDragIsOver] = useState(false);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(true);
  }
  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(false);
  }
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(false);
  }

  return (
    <Box className={classes.box} id="dropzone" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} style={{backgroundColor: dragIsOver ? 'lightgray' : 'white'}}>
      <Typography className={classes.text}>{dragDropText}</Typography>
      <Typography className={classes.text}>{orText}</Typography>
      <form>
        <Button
          variant="contained"
          className={classes.text}
          onClick={handleButtonClick}
        >
          {selectFileText}
          <input hidden type="file" ref={fileInputRef} />
        </Button>
      </form>
      <Typography style={{display: dragIsOver ? 'inline' : 'none'}}>drag-drop here toimii</Typography>
    </Box>
  );
};

export default FilesDropZone;