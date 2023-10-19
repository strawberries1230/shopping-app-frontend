import { Tooltip, Avatar, IconButton } from "@mui/material";

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
