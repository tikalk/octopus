import React from 'react';

import {
  ListItem, ListItemText, ListItemIcon,
  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails,
  ListItemSecondaryAction, List,
} from '@material-ui/core';

import { ThumbUpAlt, ExpandMore } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';

const _renderSubItems = (topics, onSelectedTopic, selectedTopic, employee) => topics.map((topic) => {
  const isSelected = selectedTopic && selectedTopic.id === topic.id;
  return <ListItem
    button onClick={() => onSelectedTopic(topic, employee)} key={topic.id}
  >
    <ListItemText
      style={{ textAlign: 'right', fontWeight: isSelected && 'bold' }} primary={topic.title}
    />
    {isSelected &&
    <ListItemSecondaryAction><ListItemIcon><ThumbUpAlt /></ListItemIcon></ListItemSecondaryAction>}
  </ListItem>;
});

class EmployeeListItem extends React.Component {

  onSelectedTopic = (topic, employee) => {
    this.props.onSelectedTopic(topic, employee);
  };

  onExpand = (employee) => {
    this.props.onExpand(employee);
  };

  render() {
    const { employee, isSelected, topics, selectedTopic } = this.props;
    return <div>
      <ExpansionPanel expanded={isSelected} onChange={() => this.onExpand(employee)}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <div style={{ marginRight: 5 }}>{employee.name}</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List style={{ minHeight: 200 }}>
            {isSelected && _renderSubItems(topics, this.onSelectedTopic, selectedTopic, employee)}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Divider />
    </div>;
  }
};

export default EmployeeListItem;
