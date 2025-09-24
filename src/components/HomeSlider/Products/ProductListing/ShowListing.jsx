import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { Button, Tooltip } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import ProductCard from "../ProductCard";
import ProductCardTwo from "../ProductCardTwo"; 

const StyledListHeader = styled(ListSubheader)({
  backgroundImage: "var(--Paper-overlay)",
});

const ShowListing = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [viewType, setViewType] = React.useState("card"); 
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Header bar */}
      <div className="bg-[#f1f1f1] px-4 py-1 mt-6 rounded-md">
        <div className="flex gap-1 items-center justify-between">
          <div className="flex gap-1 items-center">
            {/* Card view button */}
            <Tooltip title="Card View">
              <Button
                className="!w-10 !h-10 !p-0 !text-black hover:!text-primary"
                onClick={() => setViewType("card")}
              >
                <MdOutlineMenu size={22} />
              </Button>
            </Tooltip>

            {/* List view button */}
            <Tooltip title="List View">
              <Button
                className="!w-10 !h-10 !p-0 !text-black hover:!text-primary"
                onClick={() => setViewType("list")}
              >
                <CiBoxList size={22} />
              </Button>
            </Tooltip>

            <p className="text-sm">There are 25 products</p>
          </div>

          {/* Sort by dropdown */}
          <div className="flex items-center">
            <p className="text-sm mr-4 font-bold">Sort By</p>
            <Button
              id="basic-button"
              aria-controls={open ? "grouped-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="!text-black !bg-white !text-sm !font-normal"
            >
              Name & Price
            </Button>
            <Menu
              id="grouped-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                  sx: {
                    py: 0,
                  },
                },
              }}
            >
              <StyledListHeader></StyledListHeader>
              <MenuItem className="!text-sm !font-normal" onClick={handleClose}>
                Name, A To Z
              </MenuItem>
              <MenuItem className="!text-sm !font-normal" onClick={handleClose}>
                Name, Z To A
              </MenuItem>
              <MenuItem className="!text-sm !font-normal" onClick={handleClose}>
                Price, High To Low
              </MenuItem>
              <MenuItem className="!text-sm !font-normal" onClick={handleClose}>
                Price, Low To High
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* Product show area */}
      {viewType === "card" ? (
        <div className="grid grid-cols-5 gap-2 my-4">
          {[...Array(12)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3 my-4">
          {[...Array(12)].map((_, index) => (
            <ProductCardTwo key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowListing;
