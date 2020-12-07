import React, { useEffect, useState } from 'react';
import data from './data/data.json';

// const generatePath = ({ id = '', assetSlug = '' }) => {
//   // first check if hass assetId
//   if (!id || !assetSlug) return '';
//   const typeContruct = (type) =>
//   {
//       show: 'video',
//       article: 'article',
//   }[type];
// return typeConstruct(type)
// }

// const assetPath = hasAssetSlug
// ? `/videos/${assetId}/${assetSlug}`
// : extURL || sectionPath //|| getPlaybackPath( //just video
//   asset,
//   categoryMapping
// );

const Card = () => {
  return <div>Card</div>;
};

const Example = () => {
  const [state, setState] = useState([]);

  const getResults = () => {
    return data;
  };

  useEffect(() => {
    async function fetchData() {
      const results = await getResults();
      setState(results);
    }
    fetchData();
  }, []);

  if (!state || !state.length) {
    return null;
  }
  return (
    <div>
      Example
      {state.map((item, index) => (
        <Card key={index}>{item?.title}</Card>
      ))}
    </div>
  );
};

export default Example;
