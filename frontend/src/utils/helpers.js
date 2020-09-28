export const frameworksToArray = (array) => {
    let allFrameworks = []
    array.map((framework) => {
        const name = framework.node.name;
        const teaser = framework.node.teaser;
        const caption = framework.node.caption;
        const type = framework.node.type.type;
        allFrameworks.push({ name, teaser, caption, type });
        return allFrameworks;
    }) 
    return allFrameworks
}