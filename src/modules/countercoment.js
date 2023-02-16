import {getData} from './APIcoment'

export const countcoment = async(index) => {
  const coment = await getData(index)
  let count = 0;
  coment.forEach(element => {
    count +=1
  });
   return count
}