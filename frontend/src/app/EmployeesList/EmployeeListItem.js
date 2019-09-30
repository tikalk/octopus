import React from 'react';

import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  List
} from '@material-ui/core';

import { ThumbUpAlt, ExpandMore } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';

const _renderSubItems = (topics, onSelectedTopic, selectedTopic, employee) =>
  topics.map(topic => {
    const isSelected = selectedTopic && selectedTopic.id === topic.id;
    return (
      <ListItem button onClick={() => onSelectedTopic(topic, employee)} key={topic.id}>
        <ListItemIcon>{isSelected && <ThumbUpAlt />}</ListItemIcon>
        <ListItemText primary={topic.title} />
      </ListItem>
    );
  });

const EmployeeListItem = props => {
  const { employee, isSelected, topics, selectedTopic, onSelectedTopic, onExpand } = props;

  return (
    <div>
      <ExpansionPanel expanded={isSelected} onChange={() => onExpand(employee)}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <div style={{ marginRight: 5 }}>{employee.name}</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List style={{ minHeight: 200 }}>
            {isSelected && _renderSubItems(topics, onSelectedTopic, selectedTopic, employee)}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Divider />
    </div>
  );
};

export default EmployeeListItem;
