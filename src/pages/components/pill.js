import { Chip } from "@mui/material";

const ChipComponent = ({ items, colorScheme }) => {
  return (
    <div className="mt-4 flex justify-center items-center space-x-2">
      {items?.map((item, index) => (
        <Chip key={index} label={item} color={colorScheme?.background} />
      ))}
    </div>
  );
};

export default ChipComponent;
