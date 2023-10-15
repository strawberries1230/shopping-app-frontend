import { Tooltip, Avatar, IconButton } from "@mui/material";
// import { forwardRef } from "react";
// const UserIcon = forwardRef((props, ref) =>{
//   return (
//     <Tooltip title="Open settings">
//         <IconButton onClick={props.handleOpenUserMenu} sx={{ p: 0 }} ref={ref}>
//           <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//         </IconButton>
//       </Tooltip>
//   );
// });
const UserIcon = ((props) =>{
    return (
      <Tooltip title="Open settings">
          <IconButton onClick={props.handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
    );
  });
export default UserIcon;
