import React, { useState, useEffect } from 'react';
import { Select, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; 
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const navigate = useNavigate(); 
  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  };
  const handleItemClick = (id) => {
    if (id === 5) {
        navigate('/contact');
    }
    if(id==1){
        navigate('/')
    }
  };
  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const items = [
    { id: 1, key: 'home' },

    { id: 2, key: 'jobs' },
    { id: 3, key: 'services' },
    { id: 4, key: 'about_us' },
    { id: 5, key: 'contact_us' },
  ];

  return (
    <div className="flex justify-between z-20 bg-[#eef2ff] fixed top-0 w-[100%] p-2 px-[70px] h-[70px] items-center">
      <div className="items-center justify-center rounded-[50%]">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          alt="companyLogo"
          className="rounded-[50%] w-[60px] h-[60px]"
        />
      </div>
      <div className="flex gap-10 sm:gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="text-sm hover:text-[15px] rounded-lg hover:text-purple-700 cursor-pointer transition duration-300 font-medium"
            onClick={() => handleItemClick(item.id)}
          >
            {t(item.key)}
          </div>
        ))}
      </div>
      <div className="w-30 rounded-l-lg">
        <Flex direction="column" align="center">
          <Select
            onChange={changeLanguage}
            value={language} // Ensure the selected option reflects the current language
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
