import React from 'react';
import { Paper, Box, Divider, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: `${theme.spacing(1)}`,
  },
  box: {
    margin: `${theme.spacing(1)}`,
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
      <Box className={box}>{children}</Box>
    </Paper>
  );
};

export default Topic;
