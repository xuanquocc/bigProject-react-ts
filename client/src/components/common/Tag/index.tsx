import * as React from 'react';

interface TagProps {
    text: string;
    icon?: string;
}

export const Tag: React.FC<TagProps> = ({text, icon}) => {
  return (
      <div className='wrapp-tag flex flex-row p-2 border rounded-xl flex-1 justify-center cursor-pointer hover:bg-slate-100'>
        {icon && <img src={icon} alt="icon"  className='mr-2'/>}
        <div className="social-content">
          <p>{text}</p>
        </div>
      </div>
  );
};

export default Tag;
