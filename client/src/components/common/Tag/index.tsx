import * as React from 'react';
import ButtonTagMui from "./style.ts";

interface TagProps {
    text: string;
    icon?: string;
}

export const Tag: React.FC<TagProps> = ({text, icon}) => {
  return (
      <ButtonTagMui className='wrapp-tag flex flex-row p-2 border rounded-xl flex-1 justify-center cursor-pointer hover:bg-slate-100'>
        {icon && <img src={icon} alt="icon"  className='mr-2'/>}
        <div className="social-content">
          <p className='font-bold'>{text}</p>
        </div>
      </ButtonTagMui>
  );
};

export default Tag;
