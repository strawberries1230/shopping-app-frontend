import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

function LandingPage() {
  const imageUrl = 'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935558/acastro_STK103__01.jpg'; // 替换成你图片的URL

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // 让容器充满整个视口高度
  };

  const imageStyle = {
    maxWidth: '100%', // 设置最大宽度，以使图片可伸缩
    height: 'auto',  // 保持图片宽高比例
  };

  return (
    <Container maxWidth="md" style={containerStyle}>
      <Paper elevation={3}>
        <img src={imageUrl} alt="Beautiful Image" style={imageStyle} />
      </Paper>
    </Container>
  );
}

export default LandingPage;
