const url = "https://api.github.com/users/meerimbatyr/followers?per_page=12";

const fetchFollowers = async function () {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

export default fetchFollowers;
