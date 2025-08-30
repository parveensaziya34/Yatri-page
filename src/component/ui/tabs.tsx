// import React, { useState } from 'react';

// const Tabs = ({ children, defaultValue, value, onValueChange, className = '' }) => {
//   const [activeTab, setActiveTab] = useState(defaultValue || '');
  
//   const currentValue = value !== undefined ? value : activeTab;
//   const handleValueChange = value !== undefined ? onValueChange : setActiveTab;

//   const classes = ['tabs', className].filter(Boolean).join(' ');

//   return (
//     <div className={classes}>
//       {React.Children.map(children, child =>
//         React.cloneElement(child, {
//           activeTab: currentValue,
//           onTabChange: handleValueChange,
//         })
//       )}
//     </div>
//   );
// };

// const TabsList = ({ children, activeTab, onTabChange, className = '' }) => {
//   const classes = ['tabs-list', className].filter(Boolean).join(' ');

//   return (
//     <div className={classes}>
//       {React.Children.map(children, child =>
//         React.cloneElement(child, {
//           activeTab,
//           onTabChange,
//         })
//       )}
//     </div>
//   );
// };

// const TabsTrigger = ({ 
//   children, 
//   value, 
//   activeTab, 
//   onTabChange, 
//   className = '' 
// }) => {
//   const isActive = activeTab === value;
//   const classes = [
//     'tab-trigger',
//     isActive ? 'active' : '',
//     className,
//   ].filter(Boolean).join(' ');

//   return (
//     <button
//       className={classes}
//       onClick={() => onTabChange(value)}
//       type="button"
//     >
//       {children}
//     </button>
//   );
// };

// const TabsContent = ({ children, value, activeTab, className = '' }) => {
//   if (activeTab !== value) return null;

//   const classes = ['tab-content', className].filter(Boolean).join(' ');

//   return (
//     <div className={classes}>
//       {children}
//     </div>
//   );
// };

// export { Tabs, TabsList, TabsTrigger, TabsContent };