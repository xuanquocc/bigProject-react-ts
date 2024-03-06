import * as React from 'react';
import TickList from './style';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
interface TickProps {
    icon?: string,
    text: string,
    clasname?: string
}

const Tick: React.FunctionComponent<TickProps> = ({icon, text, clasname}) => {
  return (
    <TickList className={`wrapp-tick flex flex-row gap-4 ${clasname}`} disablePadding>
      <ListItem disablePadding >
        <ListItemButton>
          <ListItemIcon>
            {icon && <img src={icon} alt="icon" className='mr-2' />}
          </ListItemIcon>
          <ListItemText primary={text} className='text-tick'/>
        </ListItemButton>
      </ListItem>
    </TickList>
  ) ;
};

export default Tick;
