import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import Grid2 from '@mui/material/Unstable_Grid2';
import itemData from './itemData';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

export default function BooksToReadGrid() {

  //TODO - add book to booklist on click of icon
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log("testing");
  // }

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
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}

                      >
                        <a href={item.link} target='_blank' rel="noreferrer noopener" style={{ color: '#EEEEEE', opacity: 0.7 }}>
                          <AddShoppingCartTwoToneIcon />
                        </a>
                      </IconButton>
                    }
                  />
                </ImageListItem>
              </Grid2>
            ))}
          </ImageList>
        </Grid2>
      </BookContextProvider>
    </div>
  );
}
