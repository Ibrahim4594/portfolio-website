'use client';

import { useState } from 'react';

interface GallerySection {
  title: string;
  images: string[];
}

interface GalleryProps {
  sections: GallerySection[];
}

export default function Gallery({ sections }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allImages = sections.flatMap(section => section.images);

  return (
    <>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-20">
          <h3 className="text-xl font-bold terminal-text mb-8 font-mono">{'>'} {section.title.toUpperCase().replace(/ /g, '_')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden cursor-pointer group border border-[#00ff00]/30 hover:border-[#00ff00] transition-all duration-300 bg-black"
                onClick={() => setSelectedImage(image)}
              >
                {image.endsWith('.mp4') ? (
                  <video
                    src={image}
                    className="w-full h-full object-cover transition-all duration-300"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                ) : (
                  <img
                    src={image}
                    alt={`${section.title} - ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 right-2 text-[#00ff00] font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.endsWith('.mp4') ? '[PLAY]' : '[VIEW]'}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 terminal-text text-2xl font-bold hover:glow-green-text font-mono z-10"
            onClick={() => setSelectedImage(null)}
          >
            [X]
          </button>
          {selectedImage.endsWith('.mp4') ? (
            <video
              src={selectedImage}
              className="max-w-full max-h-full object-contain border-2 border-[#00ff00]/30 relative z-10"
              controls
              autoPlay
              loop
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain border-2 border-[#00ff00]/30 relative z-10"
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 terminal-text text-3xl font-bold hover:glow-green-text font-mono z-10"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = allImages.indexOf(selectedImage);
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
              setSelectedImage(allImages[prevIndex]);
            }}
          >
            {'<'}
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 terminal-text text-3xl font-bold hover:glow-green-text font-mono z-10"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = allImages.indexOf(selectedImage);
              const nextIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
              setSelectedImage(allImages[nextIndex]);
            }}
          >
            {'>'}
          </button>
        </div>
      )}
    </>
  );
}
