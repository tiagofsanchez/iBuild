/** @jsx jsx */
import { jsx } from "theme-ui";

import { LandingPageLayout } from "../components/shared/layout";
import SEO from "../components/shared/seo";

const Index = () => {
  return (
    <LandingPageLayout>
      <SEO />
      <div sx={{ variant: `layout.main`, height: `100vh` }}>
        <h1 sx={{ color: `text2` }}>Upsss... something went wrong!!!!</h1>
      </div>
    </LandingPageLayout>
  );
};

export default Index;
