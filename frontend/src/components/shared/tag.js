/** @jsx jsx */
import { jsx } from "theme-ui";

const Tag = ({ description }) => {
  return (
    <span
      sx={{
        variant: `text.caption`,
        bg: `primary`,
        color: `text2`,
        p: 1,
        borderRadius: 2,
      }}
    >
      {description}
    </span>
  );
};

export default Tag;
