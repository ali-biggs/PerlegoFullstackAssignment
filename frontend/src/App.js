import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import Grid2 from '@mui/material/Unstable_Grid2';
import itemData from './itemData';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';

const handleClick = (e) => {
  e.preventDefault();
  console.log("working");
}

export default function BooksToReadGrid() {
  return (
    <div>
      <h2>Books you might like to read...</h2>
      <BookContextProvider>
        <Grid2 container spacing={2}  >
          <ImageList sx={{ width: 1300, height: 1000 }} cols={4} >
            {itemData.map((item) => (
              <Grid2>
                <ImageListItem key={item.img}>
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
                        onClick={handleClick}
                      >
                        <BookmarkAddOutlinedIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              </Grid2>
            ))}
          </ImageList>
        </Grid2>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}
