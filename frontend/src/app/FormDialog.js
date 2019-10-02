import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, AppBar, Toolbar, IconButton, Slide, Fab } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  hiddenInput: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    fontSize: '18px',
    width: '100%'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormDialog = ({ open, onBackClicked, preFilledFormURL, width, height }) => {
  const classes = useStyles();
  const hiddenInputElement = useRef(null);

  const handleClose = () => {
    onBackClicked();
  };

  const handleCopyToClipboard = () => {
    const hiddenInput = hiddenInputElement.current;
    hiddenInput.select();
    hiddenInput.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand('copy');
  };

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Fab variant="extended" className={classes.fab} onClick={handleCopyToClipboard} aria-label="copy">
            <CopyIcon className={classes.extendedIcon} />
            העתק
          </Fab>
          <input
            type="text"
            value={preFilledFormURL}
            id="copyInput"
            className={classes.hiddenInput}
            ref={hiddenInputElement}
          />
        </Toolbar>
      </AppBar>
      <div>
        <iframe
          src={`${preFilledFormURL}&embedded=true`}
          width={width}
          height={height - 64}
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </Dialog>
  );
};

export default FormDialog;
