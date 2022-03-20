// import React from 'react';
// import { LanguageContext, FormatContext } from '../App';
// function Book({ book }) {
//   return (
//     <LanguageContext.Consumer>
//       {(language) => (
//         <FormatContext.Consumer>
//           {(format) => (
//             <li>
//               {book.title} - {book.price} $ <i>in {language} Language</i> (
//               {format} format)
//             </li>
//           )}
//         </FormatContext.Consumer>
//       )}
//     </LanguageContext.Consumer>
//   );
// }

// export default Book;

import React, { useContext } from 'react';
import { LanguageContext, FormatContext } from '../App';

function Book({ book }) {
  const language = useContext(LanguageContext);
  const format = useContext(FormatContext);
  return (
    <li>
      {book.title} - {book.price} $ <i>in {language} Language</i> ({format}{' '}
      format)
    </li>
  );
}
export default Book;
