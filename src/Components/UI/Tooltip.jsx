import { useState } from "react";
import LazyImage from "./LazyImage";
import DOMPurify from "dompurify";

function formatDescription(description, tunables) {
  if (!tunables) return description;

  return description.replace(/\{(\d+)\}/g, (_, index) => {
    const values = tunables[index];
    return Array.isArray(values) ? values[values.length - 1] : values;
  });
}

const PerkTooltip = ({
  perkImg,
  perkName,
  perkDescription,
  tunables,
  className = "",
}) => {
  const [visible, setVisible] = useState(false);

  const formattedDescription = formatDescription(perkDescription, tunables);

  const cleanDescription = DOMPurify.sanitize(formattedDescription, {
    ALLOWED_TAGS: ["b", "i", "strong", "em", "br", "p", "ul", "li"],
  });

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <LazyImage
        src={perkImg}
        alt={perkName}
        width={120}
        className="cursor-pointer rounded-lg md:w-[120px] max-md:w-[120px]"
      />

      <div
        className={`absolute bottom-full left-1/2 transform -translate-x-1/2
          bg-black text-white text-sm rounded-2xl shadow-lg z-10 w-max max-w-xs
          transition-all duration-200 origin-bottom flex flex-col max-md:max-w-[60vw]
          ${
            visible
              ? "scale-100 opacity-100 pointer-events-auto"
              : "scale-95 opacity-0 pointer-events-none"
          }`}
      >
        <div className="bg-gradient-to-br from-gray-900 to-purple-700 p-2 rounded-t-2xl">
          <h4 className="text-[1.25rem] font-semibold max-md:text-[1rem]">
            {perkName}
          </h4>
        </div>

        <div
          className="p-2 text-sm max-md:text-[12px] max-h-45 overflow-y-auto break-words custom-scrollbar"
          dangerouslySetInnerHTML={{ __html: cleanDescription }}
        />
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f1f1f;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #9b5de5;
          border-radius: 8px;
          border: 2px solid #1f1f1f;
        }
        .custom-scrollbar {
          scrollbar-width: thin; 
          scrollbar-color: #9b5de5 #1f1f1f; 
        }
      `}</style>
    </div>
  );
};

export default PerkTooltip;
