import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView source={{ uri: 'https://developer.apple.com/augmented-reality/quick-look/' }} style={{ marginTop: 20 }} />
  );
}

