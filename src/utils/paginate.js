import _ from "lodash";

export function paginate(items = [], page, size) {
  const startIndex = (page - 1) * size;
  return _.slice(items, startIndex, startIndex + size);
}

/**                0,1,2  3
 *  const items  = [1,2,3,4,5,6,7,8,9,10]
 *  const page = 2
 *  const size = 3
 *
 *  const list = [4,5,6]
 * formula :
 * const startIndex =  (page - 1) * size = 3
 * const lastIndex = startIndex + size  = 3
 *
 */
