import React from 'react';
import {
  Paper,
  Grid,
  Box,
  Divider,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: `${theme.spacing(1)}`,
  },
  box: {
    margin: `${theme.spacing(2)} 0`,
  },
}));

const Topic = ({ title, children }) => {
  const { paper, box } = useStyles();

  return (
    <Paper className={paper} variant="outlined">
      <Typography component="h1" variant="h4">
        {title}
      </Typography>
      <Divider />
      <Grid className={box}>
        <Box>{children}</Box>
      </Grid>
    </Paper>
  );
};

export default Topic;
