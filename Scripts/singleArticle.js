const getBlogId = () => {
  let link = window.location.href;
  let linkArray = link.split("/");
  let blogId = linkArray.slice(-1).pop();
  return blogId;
};
console.log(getBlogId());
