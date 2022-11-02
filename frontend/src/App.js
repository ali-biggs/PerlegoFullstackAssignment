import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
//import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import Grid2 from '@mui/material/Unstable_Grid2';
import itemData from './itemData';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

export default function BooksToReadGrid() {

  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');

  const handleClickOpen = (synopsis) => {
    setOpen(true);
    setContent(synopsis)
  };
  const handleClose = () => {
    setOpen(false);
    setContent('')
  };

  return (
    <div className='App' style={{ background: '#121212' }}>
      <BookContextProvider>
        <h2 style={{ marginLeft: 50 }}>Books you might like to read...</h2>
        <Grid2 container spacing={2} sx={{ background: '#121212', color: '#EEEEEE', marginLeft: 5 }} >
          <ImageList sx={{ width: 1300, height: 1000 }} cols={4} >
            <ImageListItem >
              <BookForm />
              <Navbar />
              <BookList />
            </ImageListItem>
            {itemData.map((item) => (
              <Grid2 >
                <ImageListItem key={item.id}>
                  <Tooltip title="Click for a summary" placement='top'>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      synopsis={item.synopsis}
                      loading="lazy"
                      onClick={() => handleClickOpen(item.synopsis)}
                    />
                  </Tooltip>
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <Tooltip title={item.price}>
                        <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${item.title}`}

                        >
                          <a href={item.link} target='_blank' rel="noreferrer noopener" style={{ color: 'rgba(255, 255, 255, 0.54)' }}>
                            <AddShoppingCartTwoToneIcon />
                          </a>
                        </IconButton>
                      </Tooltip>
                    }
                  />
                </ImageListItem>
              </Grid2>
            ))}
          </ImageList>
        </Grid2>
      </BookContextProvider>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">
          {"Synopsis"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Exit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
