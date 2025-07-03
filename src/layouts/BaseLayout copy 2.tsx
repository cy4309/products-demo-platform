// import ThemeButton from "@/components/ThemeButton";
import React, { useState, useEffect, useRef } from "react";
import BaseButton from "@/components/BaseButton";
import spe3dLogo from "@/assets/images/spe3d-logo.avif";
import usa from "@/assets/images/usa.png";
import twn from "@/assets/images/twn.png";
import jpn from "@/assets/images/jpn.png";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const languages = [
    { value: "English", label: "English", flag: usa },
    { value: "Chinese", label: "中文", flag: twn },
    { value: "Japanese", label: "日本語", flag: jpn },
  ];

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const updateSpacing = () => {
      if (headerRef.current && footerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const footerHeight = footerRef.current.offsetHeight;

        document.documentElement.style.setProperty(
          "--header-height",
          `${headerHeight}px`
        );
        document.documentElement.style.setProperty(
          "--footer-height",
          `${footerHeight}px`
        );
      }
    };

    updateSpacing();
    window.addEventListener("resize", updateSpacing);

    return () => window.removeEventListener("resize", updateSpacing);
  }, []);

  return (
    <div className="w-full min-h-[100dvh] bg-primary text-white">
      <header
        ref={headerRef}
        className="z-10 p-8 pb-12 w-full shadow flex justify-between items-center border-b bg-primary fixed top-0"
      >
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <img src={spe3dLogo} alt="SPE3D Logo" className="h-14" />
          <h2 className="text-xl font-bold text-secondary">
            Intelligence in Motion
          </h2>
        </div>

        <ul className="flex flex-col lg:flex-row items-center gap-6">
          <li>HomePage</li>
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

      <main
        className="p-4 flex-1"
        style={{
          marginTop: "var(--header-height)",
          marginBottom: "var(--footer-height)",
        }}
      >
        {children}
      </main>

      <footer
        ref={footerRef}
        className="z-10 p-8 pt-12 text-sm w-full border-t bg-primary fixed bottom-0"
      >
        <p>
          COPYRIGHT &copy; {new Date().getFullYear()} SPEED 3D INC. ALL RIGHTS
          RESERVED.
        </p>
      </footer>
    </div>
  );
};

export default BaseLayout;
