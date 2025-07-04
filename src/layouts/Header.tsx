import { useState } from "react";
import BaseButton from "@/components/BaseButton";
import spe3dLogo from "@/assets/images/icons/spe3d-logo.avif";
import usa from "@/assets/images/icons/usa.png";
import twn from "@/assets/images/icons/twn.png";
import jpn from "@/assets/images/icons/jpn.png";

const Header: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { value: "English", label: "English", flag: usa },
    { value: "Chinese", label: "中文", flag: twn },
    { value: "Japanese", label: "日本語", flag: jpn },
  ];

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 p-4 h-layoutPadding w-full border-b flex justify-between items-center bg-primary">
      <div className="flex flex-col sm:flex-row items-center">
        <img src={spe3dLogo} alt="SPE3D" />
        <h2 className="ml-4 text-xl font-bold text-secondary">
          Intelligence in Motion
        </h2>
      </div>
      <ul className="gap-2 flex flex-col sm:flex-row justify-center items-center">
        <li className="text-secondary">HOMEPAGE</li>
        <li className="relative">
          <BaseButton
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-primary border border-gray-600 px-3 py-2 flex items-center gap-2 hover:bg-gray-700 transition-colors"
          >
            <img
              src={
                languages.find((lang) => lang.value === selectedLanguage)?.flag
              }
              alt={selectedLanguage}
              className="w-4 h-4"
            />
            <span>
              {languages.find((lang) => lang.value === selectedLanguage)?.label}
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </BaseButton>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-gray-800 border border-gray-600 shadow-lg z-10 min-w-full">
              {languages.map((language) => (
                <button
                  key={language.value}
                  onClick={() => handleLanguageSelect(language.value)}
                  className="w-full px-3 py-2 text-left hover:bg-gray-700 flex items-center gap-2 transition-colors"
                >
                  <img
                    src={language.flag}
                    alt={language.label}
                    className="w-4 h-4"
                  />
                  <span>{language.label}</span>
                </button>
              ))}
            </div>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
