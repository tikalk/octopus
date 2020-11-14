import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox, Grid, IconButton, Typography,Button } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
const Filter = ({ obj, onFilterChange, onClearAllFilters }) => {
  const [showItems, setShowItems] = useState(false);

  const handleChange = (name) => {
    onFilterChange(name);
  };

  const handleFilterButtonClick = () => {
    setShowItems(!showItems);
  };
  const handleClearAllButton = () => {
    onClearAllFilters();
  };

  const selectedFilterItems = Object.keys(obj).filter((item) => obj[item]);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <IconButton color="primary" aria-label="show hide filter" component="span" onClick={handleFilterButtonClick}>
            <FilterList />
          </IconButton>
        </Grid>
        <Grid item xs={9}>
          <Typography noWrap={true} style={{ marginTop: 18, fontSize: 10 }}>
            {selectedFilterItems.join(', ')}
          </Typography>
        </Grid>
      </Grid>

      {showItems && (
        <FormGroup style={{ paddingRight: 30 }}>
          <FormControlLabel
            control={
              <Button color="primary" onClick={handleClearAllButton}>
                נקה הכל
              </Button>
            }
          />
          {Object.keys(obj).map((name) => {
            const value = obj[name];
            return (
              <FormControlLabel
                key={name}
                control={<Checkbox color={'default'} checked={value} onChange={() => handleChange({ name })} />}
                label={name}
              />
            );
          })}
        </FormGroup>
      )}
    </div>
  );
};

export default Filter;
