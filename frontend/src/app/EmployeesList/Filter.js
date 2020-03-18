import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox, Grid, IconButton, Typography } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
const Filter = ({ obj, onFilterChange }) => {
  const [showItems, setShowItems] = useState(false);
  const handleChange = name => {
    onFilterChange(name);
  };

  const handleFilterButtonClick = () => {
    setShowItems(!showItems);
  };

  const selectedFilterItems = Object.keys(obj).filter(item => obj[item]);

  return (
    <Grid container spacing={3}>
      <Grid xs={12} container spacing={2}>
        <Grid item xs={3} style={{ paddingRight: 16 }}>
          <IconButton color="primary" aria-label="show hide filter" component="span" onClick={handleFilterButtonClick}>
            <FilterList />
          </IconButton>
        </Grid>
        <Grid item xs={9}>
          <Typography noWrap={true} style={{ marginTop: 18, fontSize:10 }}>
            {selectedFilterItems.join(', ')}
          </Typography>
        </Grid>
      </Grid>
      {showItems && (
        <Grid item xs={12} style={{ paddingRight: 20 }}>
          <FormGroup>
            {Object.keys(obj).map(name => {
              const value = obj[name];
              return (
                <FormControlLabel
                  key={name}
                  control={<Checkbox checked={value} onChange={() => handleChange({ name })} />}
                  label={name}
                />
              );
            })}
          </FormGroup>
        </Grid>
      )}
    </Grid>
  );
};

export default Filter;
