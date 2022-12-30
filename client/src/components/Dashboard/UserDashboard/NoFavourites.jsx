import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import '../../../styles/noFavourites.css'

function NoFavourites() {
  return (
    <>
      <Alert variant="success" className="noFavs">
        <Alert.Heading className='leyenda-head'>Nothing here yet...</Alert.Heading>
        <p className='leyenda-body'>
          Oh snap!, it seems you don't have any favourite article yet!.
        </p>
        <p className='leyenda-body'>
        In case you want to save for later your favourites articles from snYKers press the button below and check all our products!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button href='/home'>
            Let's go!
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default NoFavourites;