const images = import.meta.glob("../assets/*.{avif}", {
  eager: true,
  query: "?url",
  import: "default",
});

export default images;

/*
  The import.meta.glob() is a vite method to find all the images in the product with out the usuall import of image to use, in this method we give the specific path to the image with the corresponding format it can be {avif, png,...}.
  (Eager): The eager tell vite to import the file immediately.
  (Query): The ?url will give the url of each image so that it can be used inside the <img/> tag.
  (Import): The default essentially give the default export instead of ({
                "../assets/products/sofa.webp": {
                   default: "/assets/sofa-abc123.webp"
                 },
                "../assets/products/chair.webp": {
                  default: "/assets/chair-def456.webp"
                }
                })
*/
