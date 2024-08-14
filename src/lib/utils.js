// src/lib/utils.js

// Utility function to conditionally concatenate class names
export function cn(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
  // Utility function to debounce a function
  export function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  
  // Utility function to throttle a function
  export function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  // Utility function to format dates
  export function formatDate(date, format = 'YYYY-MM-DD') {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  }
  
  // Utility function to generate a unique ID
  export function generateId(prefix = '') {
    return `${prefix}${Math.random().toString(36).substr(2, 9)}`;
  }
  
  // Utility function to check if a value is an object
  export function isObject(value) {
    return value && typeof value === 'object' && !Array.isArray(value);
  }
  
  // Utility function to deep merge objects
  export function deepMerge(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
  
    if (isObject(target) && isObject(source)) {
      for (const key of Object.keys(source)) {
        if (isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} });
          deepMerge(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
  
    return deepMerge(target, ...sources);
  }
  