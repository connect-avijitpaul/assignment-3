function countHashtags(caption) {
  if (typeof caption !== 'string') {
    return 'Invalid';
  }

  let words = caption.split(' ');
  let hashtagCount = 0;
  let longestTag = '';

  for (let word of words) {
    if (word.startsWith('#')) {
      hashtagCount++;

      let tag = word.slice(1);

      if (tag.length > longestTag.length) {
        longestTag = tag;
      }
    }
  }

  return {
    hashtagCount: hashtagCount,
    longestTag: longestTag,
  };
}

console.log(countHashtags('This is a #test caption with #multiple #hashtags'));
console.log(countHashtags('No hashtags here'));
console.log(countHashtags('#singlehashtag'));
console.log(countHashtags('This is a #longesthashtag in the caption'));
console.log(countHashtags('Multiple #tags #in #one #caption'));
