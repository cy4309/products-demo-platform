// import ThemeButton from "@/components/ThemeButton";
import React, { useState } from "react";
import BaseButton from "@/components/BaseButton";
import spe3dLogo from "@/assets/images/spe3d-logo.avif";
import usa from "@/assets/images/usa.png";
import twn from "@/assets/images/twn.png";
import jpn from "@/assets/images/jpn.png";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
    <div className="p-8 w-full min-h-[100dvh] flex flex-col bg-primary text-white">
      <header className="pb-12 shadow flex justify-between items-center border-b sticky">
        <div className="flex items-center gap-2">
          <img src={spe3dLogo} alt="SPE3D Logo" className="h-14" />
          <h2 className="text-xl font-bold text-secondary">
            Intelligence in Motion
          </h2>
        </div>
        <ul className="flex items-center gap-6">
          <li>HomePage</li>
          <li>COMPANY</li>
          <li>PRESS</li>
          <li>CONTACT</li>
          <li>BLOG</li>
          <li className="relative">
            <BaseButton
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-primary border border-gray-600 px-3 py-2 flex items-center gap-2 hover:bg-gray-700 transition-colors"
            >
              <img
                src={
                  languages.find((lang) => lang.value === selectedLanguage)
                    ?.flag
                }
                alt={selectedLanguage}
                className="w-4 h-4"
              />
              <span>
                {
                  languages.find((lang) => lang.value === selectedLanguage)
                    ?.label
                }
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
        {/* <ThemeButton /> */}
      </header>

      <main className="p-4 flex-1">{children}</main>

      <footer className="pt-12 text-sm sticky bottom-0 border-t">
        <p className="p-4">
          COPYRIGHT &copy; {new Date().getFullYear()} SPEED 3D INC. ALL RIGHTS
          RESERVED.
        </p>
      </footer>
    </div>
  );
};

export default BaseLayout;
