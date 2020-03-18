import React from 'react';
import { Grid, Card, CardContent, Typography, AppBar, Toolbar, CircularProgress, IconButton } from '@material-ui/core';
import { Refresh as RefreshIcon } from '@material-ui/icons';

const TopicView = ({ topicData, topic, employee, loader, onRefreshButtonClick }) => (
  <Grid container spacing={4}>
    <Grid item xs={12}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container justify={'space-between'} alignItems={'center'}>
            <Grid item>
              <Typography variant="subtitle1" component="h2">
                {topic.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="h6">
                {employee.name}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton aria-label="Refresh List" onClick={onRefreshButtonClick}>
                <RefreshIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
    <Grid item xs={12}>
      {topicData.length === 0 && (
        <Grid container justify={'center'} alignItems={'center'}>
          <Grid item>אין נתונים</Grid>
        </Grid>
      )}
      {loader && (
        <Grid container alignItems={'center'} direction={'column'} justify={'space-between'}>
          <Grid item>
            <CircularProgress size={100} thickness={5} />
          </Grid>
        </Grid>
      )}
      {!loader &&
        topicData.reverse().map((section, index) => {
          return (
            section && (
              <Grid item key={`${section.sectionTitle}_${index}`}>
                <Card>
                  <CardContent>
                    <Grid container spacing={4}>
                      <Grid item xs={12}>
                        <Typography color="textSecondary">{section.sectionTitle}</Typography>
                      </Grid>
                      {section.fields.map(
                        (field, index) =>
                          field.value && (
                            <Grid item xs={12} md={field.grid} key={`${field.index}_${index}`}>
                              <Typography style={{ marginBottom: 16 }}>
                                <strong>{field.title}:</strong><br />{' '}
                                {field.value.split('\n').map((text, key) => (
                                  <span key={key}>
                                    {text}
                                    <br />
                                  </span>
                                ))}
                              </Typography>
                            </Grid>
                          )
                      )}
                    </Grid>
                  </CardContent>
                </Card>
                <hr />
              </Grid>
            )
          );
        })}
    </Grid>
  </Grid>
);

export default TopicView;
