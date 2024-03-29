import React from "react";

interface Props {
  name: string;
  active: string;
  onClick?: () => void;
}

const CategoryButton: React.FC<Props> = (props) => {
  const { active, name, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-[6px] lg:px-[14px] py-1 lg:py-[10px] rounded-full border border-[#181818] bg-[#F8F8F8] text-[#181818] text-[12px] lg:text-[28px] text-nowrap ${
        active === name ? "bg-black font-bold text-[#CBE023]" : ""
      }`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
