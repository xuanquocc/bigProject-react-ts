import * as React from 'react';
import './style.css';
interface TickProps {
    icon?: string,
    text: string,
    clasname?: string
}

const Tick: React.FunctionComponent<TickProps> = ({icon, text, clasname}) => {
  return (
      <div className={`wrapp-tick flex flex-row gap-4 ${clasname}`} >
        {icon && <img src={icon} alt="icon" className='mr-2' />}
        <p className='text-tick'>{text}</p>
      </div>
  ) ;
};

export default Tick;
