import React from 'react';

/**
 * Component header that contains logo, city-selector, popular categories, favorites
 * and search-line
 * TODO: Add custom city-selector
 * @constructor
 */
const Header = () => {
  return (
    <div>
      <div className="w-fit">
        <img src={'/logos/LogoExploreGradient.svg'} alt="Logo" />
        <select className="w-full mt-md">
          <option value="">All Categories</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
          <option value="category4">Category 4</option>
          <option value="category5">Category 5</option>
          <option value="category6">Category 6</option>
          <option value="category7">Category 7</option>
          <option value="category8">Category 8</option>
          <option value="category9">Category 9</option>
          <option value="category10">Category 10</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
