"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import {Logo} from "@/public/index";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const dropdownRef = useRef(null);

  const mobileDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setOpenMobileDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileDropdown = (dropdown) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  };

  const dropdownItems = [
    {
      id: "administration",
      label: "Administration",
      items: [
        { id: "council", label: "Council" },
        { id: "provost", label: "Provost" },
        { id: "registrar", label: "Registrar" },
      ],
    },
    {
      id: "academics",
      label: "Academics",
      items: [
        { id: "schools", label: "Schools" },
        { id: "departments", label: "Departments" },
        { id: "programmes", label: "Programmes" },
      ],
    },
    {
      id: "admission",
      label: "Admission",
      items: [
        { id: "apply", label: "Apply", external: "#" },
        { id: "entry-requirements", label: "Entry Requirements" },
      ],
    },
    {
      id: "library",
      label: "Library",
      items: [
        { id: "elearning", label: "eLearning" },
        { id: "ebooks", label: "eBooks" },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto px-9">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Link href="/">
            <Image
              src={Logo}
              alt="Al-Ma’arif College"
              width={60}
              className="rounded-full"
            />
            </Link>
            <h3 className="text-md font-semibold text-[#be9a60]">Al-Ma’arif College</h3>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#6b292a] transition-colors text-md font-semibold text-[#be9a60]"
            >
              About Us
            </button>
            {dropdownItems.map((dropdown) => (
              <div key={dropdown.id} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => toggleDropdown(dropdown.id)}
                  className="hover:text-[#6b292a] transition-colors flex items-center text-md font-semibold text-[#be9a60]"
                >
                  {dropdown.label}
                  {openDropdown === dropdown.id ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
                </button>
                {openDropdown === dropdown.id && (
                  <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg">
                    {dropdown.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() =>
                          item.external
                            ? (window.location.href = item.external)
                            : scrollToSection(item.id)
                        }
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-md font-semibold text-[#be9a60] hover:text-[#6b292a]"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#6b292a] transition-colors text-md font-semibold text-[#be9a60]"
            >
              Contact Us
            </button>
            <Button
              size="lg"
              onClick={() => scrollToSection("apply")}
              className="bg-[#6b292a] transition-colors duration-300"
            >
              Apply Now
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden text-gray-900 py-4 px-2 rounded-b-lg " ref={mobileDropdownRef}>
            <div className="flex flex-col space-y-4 items-center">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-[#6b292a] transition-colors py-2 text-center text-md font-semibold text-[#be9a60]"
              >
                About Us
              </button>
              {dropdownItems.map((dropdown) => (
                <div key={dropdown.id} className="relative">
                  <button
                    onClick={() => toggleMobileDropdown(dropdown.id)}
                    className="hover:text-[#6b292a] transition-colors py-2 flex items-center justify-center text-md font-semibold text-[#be9a60]"
                  >
                    {dropdown.label}
                    {openMobileDropdown === dropdown.id ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
                  </button>
                  {openMobileDropdown === dropdown.id && (
                    <div className="mt-2 w-full bg-white rounded-lg">
                      {dropdown.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() =>
                            item.external
                              ? (window.location.href = item.external)
                              : scrollToSection(item.id)
                          }
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-center text-md font-semibold text-[#be9a60] hover:text-[#6b292a]"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-[#6b292a] transition-colors py-2 text-center text-md font-semibold text-[#be9a60]"
              >
                Contact Us
              </button>
              <Button
                onClick={() => scrollToSection("apply")}
                className="bg-[#6b292a] text-white transition-colors duration-300"
                variant="outline"
                size="lg"
                style={{ borderColor: "black" }}
              >
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
