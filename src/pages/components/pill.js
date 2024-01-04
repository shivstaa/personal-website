import { Chip } from '@mui/material';


export const ChipComponent = ({items, colorScheme}) => {
    return(
        <div className="mt-4 flex justify-center items-center space-x-2">
            {items.map((item, _) => (
                <Chip
                 label={item}
                 color={colorScheme.background}
                 />
            ))}
        </div>
    )
}