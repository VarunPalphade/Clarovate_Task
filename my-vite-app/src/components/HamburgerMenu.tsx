// // // import React from "react";

// // // interface HamburgerMenuProps {
// // //   toggleNavbar: () => void; // Prop to toggle the navbar visibility
// // // }

// // // const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ toggleNavbar }) => {
// // //   return (
// // //     <div className="hamburger-menu">
// // //       <button onClick={toggleNavbar} className="hamburger-btn">
// // //         ☰ {/* Hamburger icon */}
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default HamburgerMenu;


// // // src/components/HamburgerMenu.tsx
// // import React from "react";

// // interface HamburgerMenuProps {
// //   toggleNavbar: () => void; // Prop to toggle the sidebar
// // }

// // const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ toggleNavbar }) => {
// //   return (
// //     <div className="hamburger-menu" style={{ padding: "10px", background: "#ccc" }}>
// //       <button onClick={toggleNavbar} style={{ fontSize: "20px" }}>
// //         ☰ {/* Hamburger icon */}
// //       </button>
// //     </div>
// //   );
// // };

// // export default HamburgerMenu;


// import React from "react";

// interface HamburgerMenuProps {
//   toggleNavbar: () => void; // Prop to toggle the navbar visibility
// }

// const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ toggleNavbar }) => {
//   return (
//     <div className="hamburger-menu">
//       <button onClick={toggleNavbar} className="hamburger-btn">
//         ☰ {/* Hamburger icon */}
//       </button>
//     </div>
//   );
// };

// export default HamburgerMenu;


import React from "react";

interface HamburgerMenuProps {
  toggleNavbar: () => void; // Prop to toggle the navbar visibility
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ toggleNavbar }) => {
  return (
    <div className="hamburger-menu">
      <button onClick={toggleNavbar} className="hamburger-btn">
        ☰ {/* Hamburger icon */}
      </button>
    </div>
  );
};

export default HamburgerMenu;
