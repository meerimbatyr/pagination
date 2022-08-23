const paginate = (followers) => {
  const itemPerPage = 3;
  const numOfPages = Math.ceil(followers.length / itemPerPage);
  //   console.log(numOfPages);

  //need to create 4 arrays from 12 followers array,which will contain 3 cards in each array
  const newFollowers = Array.from({ length: numOfPages }, (_, index) => {
    const start = index * itemPerPage;
    return followers.slice(start, start + itemPerPage);
  });
  console.log(newFollowers);
  return newFollowers;
};

export default paginate;
