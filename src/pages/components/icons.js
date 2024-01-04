import * as SiIcons from "react-icons/si";

const getIcons = (iconList) => {
  if (!Array.isArray(iconList)) {
    return [];
  }
  const icons = iconList?.map((tech) => {
    const iconName = Object.keys(SiIcons).find((name) =>
      name.toLowerCase().includes(tech.toLowerCase()),
    );
    const IconComponent = iconName ? SiIcons[iconName] : null;
    return IconComponent;
  });

  return icons.filter((icon) => icon !== null);
};

const IconComponent = ({ findIcons = [] }) => {
  const icons = getIcons(findIcons);
  // display icons
  return (
    <div className="flex justify-center items-center space-x-2">
      {Array.isArray(icons) && icons.map((Icon, index) => (
        <div key={index} className="text-2xl">
          {Icon ? <Icon /> : null}
        </div>
      ))}
    </div>
  );  
};

export default IconComponent;
