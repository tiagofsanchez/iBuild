
const _ = require("lodash");

export const frameworksToArray = (array) => {
  let allFrameworks = [];
  array.map((framework) => {
    const name = framework.node.name;
    const teaser = framework.node.teaser;
    const caption = framework.node.caption;
    const type = framework.node.type.type;
    const icon = framework.node.icon.childImageSharp.fluid;
    allFrameworks.push({ name, teaser, caption, type, icon });
    return allFrameworks;
  });
  return allFrameworks;
};

export const LowerCaseString = (string) => {
  return string.charAt(0).toLowerCase() + string.substring(1);
};


export const urlPath = (frameworkPath, appPath , siteUrl, frameworkName ) => { 
  const slug = `${appPath}${frameworkPath}/${_.kebabCase(frameworkName)}`
  const url = `${siteUrl}${slug}`
  return { slug , url}
}