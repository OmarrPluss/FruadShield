import React, { useState, useEffect } from 'react';

/**
 * GlobalTab is a universal tab component that supports all tab input styles used across the app.
 * It supports:
 * - Array of tab objects: [{ id, label, icon, content }] or [{ id, name }]
 * - Array of tab strings: ['Tab1', 'Tab2']
 * - Children as TabPanels (for advanced usage)
 *
 * Props:
 * - tabs: array of tab objects or strings
 * - defaultTab: index or id of the default active tab
 * - onTabChange: callback when tab changes
 * - children: TabPanel components (optional)
 * - className: extra classes for the container
 * - variant: 'default' | 'classic' (optional, auto-detects if not set)
 */
const GlobalTab = ({
  tabs = [],
  defaultTab = 0,
  activeTab: controlledActiveTab,
  onTabChange,
  children,
  className = '',
  variant,
  mode,
}) => {
  // Detect style variant: classic if tab objects have 'name', default if 'label'
  const isObjectTabs = Array.isArray(tabs) && tabs.length > 0 && typeof tabs[0] === 'object';
  const isClassic = variant === 'classic' || (isObjectTabs && 'name' in tabs[0]);
  const isDefault = variant === 'default' || (isObjectTabs && 'label' in tabs[0]);
  const isStringTabs = Array.isArray(tabs) && tabs.length > 0 && typeof tabs[0] === 'string';
  const tabPanels = React.Children.toArray(children);

  // Controlled/uncontrolled state
  const [internalActiveTab, setInternalActiveTab] = useState(
    isClassic && typeof defaultTab === 'number' ? tabs[defaultTab]?.id : defaultTab
  );
  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

  useEffect(() => {
    // Sync internal state if defaultTab changes (for uncontrolled usage)
    if (controlledActiveTab === undefined && isClassic && typeof defaultTab === 'number') {
      setInternalActiveTab(tabs[defaultTab]?.id);
    }
  }, [defaultTab, tabs, controlledActiveTab, isClassic]);

  // For classic, activeTab is id; for default, it's index
  const getActiveIndex = () => {
    if (isClassic) {
      return tabs.findIndex(tab => tab.id === activeTab) !== -1 ? tabs.findIndex(tab => tab.id === activeTab) : 0;
    }
    return typeof activeTab === 'number' ? activeTab : 0;
  };

  const handleTabChange = (indexOrId) => {
    if (controlledActiveTab === undefined) setInternalActiveTab(indexOrId);
    if (onTabChange) onTabChange(indexOrId);
  };

  const [effectiveMode, setEffectiveMode] = useState(() => (typeof mode === 'string' ? mode : defaultGlobalLightMode));

  useEffect(() => {
    if (typeof mode === 'string') {
      setEffectiveMode(mode);
    } else {
      const updateMode = () => {
        const newMode = document.body.classList.contains('dark') ? 'dark' : 'light';
        setEffectiveMode(newMode);
        defaultGlobalLightMode = newMode;
      };
      updateMode();
      const observer = new MutationObserver(updateMode);
      observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
      return () => observer.disconnect();
    }
  }, [mode]);

  const theme = {
    light: {
      title: 'text-black',
    },
    dark: {
      title: 'text-gray-500',
    },
  };

  const currentTheme = theme[effectiveMode] || theme.light;

  return (
    <div className={className}>
      {/* Classic style (matches layout/TabContainer.jsx) */}
      {isClassic && (
        <div className="flex border-b border-divider-color mb-6">
          {tabs.map(tab => (
            <div
              key={tab.id}
              className={`py-3 px-5 cursor-pointer font-medium relative transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-primary-accent'
                  : `${currentTheme.title} hover:text-text-light`
              }`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.name}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-accent"></div>
              )}
            </div>
          ))}
        </div>
      )}
      {/* Default style (label/content) */}
      {isDefault && (
        <div className="flex border-b border-border mb-4">
          {tabs.map((tab, idx) => (
            <div
              key={tab.id || idx}
              className={`px-5 py-2.5 cursor-pointer border-b-2 border-transparent transition-all duration-300 font-medium text-sm flex items-center gap-2 ${
                getActiveIndex() === idx
                  ? 'border-primary text-primary'
                  : `${currentTheme.title} hover:text-primary`
              }`}
              onClick={() => handleTabChange(tab.id ?? idx)}
            >
              {tab.icon && <span className="mr-1">{tab.icon}</span>}
              {tab.label}
            </div>
          ))}
        </div>
      )}
      {/* String tabs */}
      {isStringTabs && (
        <div className="flex border-b border-border mb-4">
          {tabs.map((tab, idx) => (
            <div
              key={idx}
              className={`px-5 py-2.5 cursor-pointer border-b-2 border-transparent transition-all duration-300 font-medium text-sm ${
                getActiveIndex() === idx
                  ? 'border-primary text-primary'
                  : `${currentTheme.title} hover:text-primary`
              }`}
              onClick={() => handleTabChange(idx)}
            >
              {tab}
            </div>
          ))}
        </div>
      )}
      {/* Tab Content */}
      {isClassic && tabs[getActiveIndex()] && tabs[getActiveIndex()].content && (
        <div className="tab-content">{tabs[getActiveIndex()].content}</div>
      )}
      {isDefault && tabs[getActiveIndex()] && tabs[getActiveIndex()].content && (
        <div className="tab-content">{tabs[getActiveIndex()].content}</div>
      )}
      {isStringTabs && React.Children.toArray(children)[getActiveIndex()]}
      {!tabs.length && tabPanels.length > 0 && tabPanels[getActiveIndex()]}
    </div>
  );
};

/**
 * TabPanel for advanced usage with children.
 * Usage: <TabPanel label="Tab Name">Content</TabPanel>
 */
export const TabPanel = ({ children }) => <div>{children}</div>;

// Global variable to hold the current mode
export let defaultGlobalLightMode = (typeof window !== 'undefined' && document.body && document.body.classList.contains('dark')) ? 'dark' : 'light';

export default GlobalTab;
