const DiseaseItem = ({ data }) => {
  const { thumbnail, title, link } = data || {};
  console.log(link);
  return (
    <a href={`${link}`}>
      <div>
        <h1>{title}</h1>
        <img src={thumbnail} width={200} height={200} alt="" />
      </div>
    </a>
  );
};

export default DiseaseItem;
