import React from 'react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from '@/components/ui/menubar';

interface DPSGNavbarProps {
  items: { label: string; href: string; subItems?: { label: string; href: string }[] }[];
}

const DPSGNavbar: React.FC<DPSGNavbarProps> = ({ items }) => {
  return (
    <Menubar>
      {items.map((item, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger>{item.label}</MenubarTrigger>
          {item.subItems && item.subItems.length > 0 && (
            <MenubarContent>
              {item.subItems.map((subItem, subIndex) => (
                <MenubarItem key={subIndex} onClick={() => window.location.href = subItem.href}>
                  {subItem.label}
                </MenubarItem>
              ))}
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}
    </Menubar>
  );
};

export default DPSGNavbar;
