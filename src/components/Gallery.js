import React from "react";

export default function galleryPage({ link, noOfImages }) {
  const images = Array.from({ length: noOfImages }, (_, i) => `${link}/${i + 1}.jpg`);

  const columnCount = 3;
  const imagesPerColumn = Math.ceil(noOfImages / columnCount); // Max images per column
  const columns = Array.from({ length: columnCount }, (_, i) =>
    images.slice(i * imagesPerColumn, (i + 1) * imagesPerColumn)
  );

  return (
    <div className="pt-48 md:pt-32 px-10 md:px-20 lg:px-32">
      <div className="flex flex-col sm:flex-row gap-6">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-6">
            {column.map((src, index) => (
              <div key={index} className="relative overflow-hidden cursor-pointer">
                <img src={src} alt={`Image ${index + 1}`} className="h-full object-cover" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
