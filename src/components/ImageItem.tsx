interface ImageItemProps {
  url: string;
  alt_description: string;
}

const ImageItem = (image: ImageItemProps) => {
  return (
    <div className="image-item w-full">
      <img
        className="w-full rounded-md"
        src={image.url}
        alt={image.alt_description}
      />
      <p className="mt-2 text-left">prompt: {image.alt_description}</p>
    </div>
  );
};

export default ImageItem;
