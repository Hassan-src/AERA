import images from "./productImage";

export function getImage(fileName) {
  const path = `../assets/${fileName}`;
  return images[path];
}

/*
  A helper function to get the images from the productImage
*/
