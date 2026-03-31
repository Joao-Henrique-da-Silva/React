import React from 'react';

const ComponentsList = () => {
  const components = [
    // List all component files here
    'ComponentA',
    'ComponentB',
    'ComponentC',
    // Add more components as needed
  ];

  return (
    <div>
      <h1>Components List</h1>
      <ul>
        {components.map((component) => (
          <li key={component}>{component}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentsList;