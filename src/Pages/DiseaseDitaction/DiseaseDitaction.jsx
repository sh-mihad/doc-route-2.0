import axios from "axios";

const DiseaseDitaction = () => {
  const fetchSERPResults = () => {
    const apiKey =
      "1f9bc3b81ef1247ae5bac893ec4b862e645f521cc40a585bbee0156ebb9c7f15";
    const searchEngine = "google";
    const searchQuery = "bird";

    const apiUrl = `https://serpapi.com/search?engine=${searchEngine}&q=${searchQuery}&api_key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the API response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the API request
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={fetchSERPResults}>click</button>
    </div>
  );
};

export default DiseaseDitaction;
