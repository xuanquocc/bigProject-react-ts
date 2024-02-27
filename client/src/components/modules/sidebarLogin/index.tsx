import * as React from 'react';
import logo from '../../../assets/icon/Logo.png'
import tick from '../../../assets/icon/tickIcon.png'
import imageLogo from '../../../assets/icon/imageLogo.png'
import Tick from '../../common/TickList';

interface  SidebarProps {
  title?: string;
}

const Sidebar: React.FunctionComponent< SidebarProps> = ({title}) => {

  const tickContent = ["Unlimited product uploads","Pro tips", "Free forever", "Full author options"]
  return (
    <div className="wrap-sidebar-sigup py-6 px-10">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="imageLogo flex justify-center mt-12">
        <img src={imageLogo} alt="Logo" />
      </div>

      <div className="title text-start font-bold text-3xl my-12">
        <h2>{title}</h2>
      </div>

      <div className="tick my-4">
        {tickContent.map((content, index) => (
          <Tick clasname="my-2" key={index} icon={tick} text={content} />
        ))}
      </div>

      
    </div>
  ) ;
};

export default Sidebar;
