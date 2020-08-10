import React from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(2)} ${theme.spacing(1)}`,
    marginTop: '70px',
  },
}));

const Content = ({ children }) => {
  const { container } = useStyles();
  return (
    <Container maxWidth="lg" className={container}>
      <Grid>{children}</Grid>
    </Container>
  );
};

export default Content;
