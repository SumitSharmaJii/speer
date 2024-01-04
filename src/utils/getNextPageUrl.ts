export const getNextPageUrl = (link: string) => {
  if (!link) return;
  // Regular expression to find the URL labeled as "next"
  let regex = /<([^>]+)>;\s*rel="next"/;

  // Use the regular expression to find the match
  let match = link.match(regex);
  if (match) return match[1];
};
