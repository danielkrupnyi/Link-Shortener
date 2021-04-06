import { Box, List, ListItem, Link } from "@material-ui/core";

interface LinkListProps {
  shorts?: string[];
}

const ShortsList = ({ shorts }: LinkListProps) => {
  return (
    <Box marginTop="20px">
      <List>
        {shorts?.map((short) => (
          <ListItem key={short}>
            <span>Link generated: </span> <Link href={short}>{short}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ShortsList;
