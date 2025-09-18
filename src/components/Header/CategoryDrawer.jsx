import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

const categoriesData = [
  {
    name: "Fashion",
    sub: [
      {
        name: "Men",
        sub: ["T-shirt", "Jeans", "Footwear", "Watch", "Pants"]
      },
      {
        name: "Women",
        sub: ["Saree", "Tops", "Jeans", "Footwear", "Watch"]
      },
      { name: "Kids" },
      { name: "Boys" },
      { name: "Girls" }
    ]
  },
  {
    name: "Electronics",
    sub: ["Mobile", "Laptop", "Watch", "Charger"]
  },
  {
    name: "Bags",
    sub: ["Men Bags", "Women Bags"]
  },
  {
    name: "Footwear",
    sub: ["Men Footwears", "Women Footwears"]
  },
  { name: "Groceries" },
  { name: "Beauty" },
  { name: "Wellness" },
  { name: "Jewellery" }
];

const CategoryDrawer = ({ openCtg, setOpenCtg }) => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (key) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const renderCategories = (categories, parentKey = "") => {
    return categories.map((cat, idx) => {
      const key = parentKey ? `${parentKey}-${idx}` : `${idx}`;
      const hasSub = cat.sub && cat.sub.length > 0;
      const isOpen = openItems[key];

      return (
        <List key={key} disablePadding>
            
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => hasSub && toggleItem(key)}
              className="flex justify-between items-center text-sm hover:!text-primary transition-colors duration-300"
            >
              <ListItemText primary={cat.name} className="text-sm" />
              {hasSub && (
                <span className="text-sm">
                  {isOpen ? <CiSquareMinus size={23}/> : <CiSquarePlus size={23}/>}
                </span>
              )}
            </ListItemButton>
          </ListItem>

          {hasSub && isOpen && (
            <Box sx={{ pl: 3 }}>
              {cat.sub.map((subItem, subIdx) => {
                if (typeof subItem === "string") {
                  return (
                    <ListItem key={`${key}-s-${subIdx}`} disablePadding>
                      <ListItemButton className="text-sm hover:!text-primary transition-colors duration-300" sx={{ pl: 2 }}>
                        <ListItemText primary={subItem} />
                      </ListItemButton>
                    </ListItem>
                  );
                } else {
                  // Recursive call with unique key for nested sub
                  return renderCategories([subItem], `${key}-s-${subIdx}`);
                }
              })}
            </Box>
          )}
        </List>
      );
    });
  };

  return (
    <Drawer open={openCtg} onClose={() => setOpenCtg(false)}>
    <Box sx={{ width: 250 }} role="presentation">
      {/* Logo on top */}
      <div className="flex justify-center py-4 border-b border-gray-200">
        <img src="./logo.svg" className="w-54" alt="Logo" />
      </div>

      {/* Categories */}
      {renderCategories(categoriesData)}
    </Box>
  </Drawer>
  );
};

export default CategoryDrawer;
