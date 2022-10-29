import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
//import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import Grid2 from '@mui/material/Unstable_Grid2';
import itemData from './itemData';

export default function BooksToReadGrid() {
  return (
    <div>
      <h2>Books you might like to read...</h2>
      <Grid2 container spacing={3}>
        <ImageList sx={{ width: 1300, height: 1000 }} >
          <ImageListItem key="Subheader" cols={6}>

          </ImageListItem>
          {itemData.map((item) => (
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
                  >
                    <BookmarkAddOutlinedIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid2>
    </div>
  );
}
