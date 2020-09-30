/** @jsx jsx */
import { jsx, Box } from "theme-ui";

import { Layout } from "../components/shared/layout";
import Menu from "../components/shared/menu";
import FrameworkCard from "../components/ui/frameworkCard";
import { NewsletterForm } from "../components/shared/newsletterForm";

const About = () => (
  <Layout withHero={true}>
    <section sx={{ variant: `layout.main` }}>
      <h1>Should be the About Page</h1>
      <h1>All components will be here till I set up story book</h1>
      <hr />
      <h1>Menu</h1>
      <Box sx={{ bg: `naturalDark` }}>
        <Menu />
      </Box>
      <hr />
      <h1>Typography H1</h1>
      <h2>This is H2</h2>
      <h3>This is H3</h3>
      <h4>This is H4</h4>
      <p>This is the normal paragraph</p>
      <p sx={{ variant: `text.tagline` }}>This is a tagline</p>
      <p sx={{ variant: `text.caption` }}>This is a caption</p>
      <hr />
      <h1>Cards</h1>
      <p>Primary</p>
      <FrameworkCard />
      <p sx={{ variant: `text.caption` }}>Responsive for desktop and mobile</p>
      <hr />
      <h1>Newsletter form</h1>
      <NewsletterForm />
      <p sx={{ variant: `text.caption` }}>Responsive for desktop and mobile</p>
    </section>
  </Layout>
);

export default About;
