// import React from 'react';
// import PartOfSpeech from '../PartOfSpeech/index.js';
// import './PartsOfSpeech.css';

// const index = ({meanings}) => {
//   console.log(meanings);

//   const items = [];
//   // const content = [];
//   // console.log(items)

//   const jsxContent = Object.keys(meanings).forEach((partOfSpeech) => {
    
//     const item = meanings[partOfSpeech];

//     const singleItem = {
//       title:partOfSpeech,
//       content:item,
//     };

//     // item.push(singleItem);
//   }
//   );
  
//   return (
//     <div className='parts-of-speech'>
//       {items && items.length > 0 && (
//         <>
//           {
//             items.map((item, index) => {
//             return <PartOfSpeech item={item} key={index} />;
//           })}
//         </>
//       )}
//     </div>
//   );
// };

// export default index;

import React from 'react';
import PartOfSpeech from '../PartOfSpeech/index.js';
import './PartsOfSpeech.css';

const index = ({ meanings }) => {
  console.log(meanings);

  const items = Object.keys(meanings).forEach((partOfSpeech) => {
    const item = meanings[partOfSpeech];
    return {
      title: partOfSpeech,
      content: item,
    };
  });

  return (
    <div className='parts-of-speech'>
      {items && items.length > 0 && (
        <>
          {items.map((item, index) => {
            return <PartOfSpeech item={item} key={index} />;
          })}
        </>
      )}
    </div>
  );
};

export default index;
