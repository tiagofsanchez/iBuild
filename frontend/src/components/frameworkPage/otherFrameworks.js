/** @jsx jsx */
import { jsx } from "theme-ui";
import { frameworksToArray } from "../../utils/helpers";
import FrameworkCardList from "../shared/frameworkCardList";

const OtherFrameworks = ({ otherFrameworks }) => {
  const allFrameworks = frameworksToArray(otherFrameworks);

  return (
    <section sx={{ variant: `layout.frameworkOthers`, mb: 6 }}>
      <h1 sx={{ textAlign: `center`, my: 4, color: `text` }}>
        Other useful tools
      </h1>
      <FrameworkCardList allFrameworks={allFrameworks} />
    </section>
  );
};

export default OtherFrameworks;
