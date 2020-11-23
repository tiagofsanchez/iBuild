/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button } from "theme-ui";

import { MdCloudDownload } from "react-icons/md";

const DownloadButton = () => {
  return (
    <div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://tiagofsanchez.ck.page/b4231e6591";
        }}
        sx={{
          bg: `primary`,
          borderColor: `primary2`,
          display: `grid`,
          p: 3,
          gridTemplateColumns: `auto auto`,
          gridGap: `15px`,
        }}
      >
        Download SLIDES
        <MdCloudDownload size={25} />{" "}
      </Button>
    </div>
  );
};

export default DownloadButton;
