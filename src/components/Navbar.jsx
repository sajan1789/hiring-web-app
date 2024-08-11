import React from 'react';
import { Select, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value);
  };

  // Translation items
  const items = [
    { id: 1, key: 'home' },
    { id: 2, key: 'sports' },
    { id: 3, key: 'jobs' },
    { id: 4, key: 'services' },
    { id: 5, key: 'about_us' },
    { id: 6, key: 'contact_us' },
  ];

  return (
    <div className="flex justify-between z-20 bg-[#eef2ff] fixed top-0 w-[100%] p-2 px-[70px] h-[70px] items-center">
      <div className="items-center justify-center rounded-[50%]">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          alt=""
          className="rounded-[50%] w-[60px] h-[60px]"
        />
      </div>
      <div className="flex gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="text-sm hover:text-[15px] rounded-lg hover:text-purple-700 cursor-pointer transition duration-300 font-medium"
          >
            {t(item.key)}
          </div>
        ))}
      </div>
      <div className="w-30 rounded-l-lg">
        <Flex direction="column" align="center">
          <Select
            onChange={changeLanguage}
            defaultValue="en"
            w="150px"
            borderRadius="6px"
            size="sm"
          >
            <option value="en">🇺🇸 English</option>
            <option value="hin">🇮🇳 Hindi</option>
            <option value="fr">🇫🇷 French</option>
          </Select>
        </Flex>
      </div>
    </div>
  );
};

export default Navbar;
